import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { checkImageUrl, listStorageFiles, repairPropertyImages } from '@/lib/properties';

export async function GET(req: NextRequest) {
  try {
    const supabase = createAdminClient();
    const { data: properties, error: dbError } = await supabase
      .from('properties')
      .select('*');

    if (dbError) throw dbError;
    if (!properties) {
      return NextResponse.json({ success: true, stats: {} });
    }

    const storageFiles = await listStorageFiles();
    const logs: string[] = [];
    let validCount = 0;
    let brokenCount = 0;
    let missingCount = 0;
    const imageUrls = new Set<string>();
    let duplicateCount = 0;

    await Promise.all(
      properties.map(async (p) => {
        if (!p.images || p.images.length === 0 || !p.images[0]) {
          missingCount++;
          logs.push(`Property ${p.id} (${p.title}): Image array is missing or empty.`);
          return;
        }

        const img = p.images[0];
        if (imageUrls.has(img)) {
          duplicateCount++;
          logs.push(`Property ${p.id} (${p.title}): Has duplicate first image URL (${img}).`);
        } else {
          imageUrls.add(img);
        }

        const isValid = await checkImageUrl(img);
        if (isValid) {
          validCount++;
        } else {
          brokenCount++;
          logs.push(`Property ${p.id} (${p.title}): First image is broken (${img}).`);
        }
      })
    );

    // Calculate Orphan assets in Storage
    const activeUrls = new Set<string>();
    properties.forEach(p => {
      p.images?.forEach((img: string) => activeUrls.add(img));
    });

    let orphanCount = 0;
    storageFiles.forEach(file => {
      const { data } = supabase.storage.from('properties').getPublicUrl(file);
      if (!activeUrls.has(data.publicUrl)) {
        orphanCount++;
        logs.push(`Storage File ${file}: Orphan asset (not referenced by any property).`);
      }
    });

    const stats = {
      total: properties.length,
      valid: validCount,
      broken: brokenCount,
      missing: missingCount,
      duplicate: duplicateCount,
      orphan: orphanCount
    };

    return NextResponse.json({
      success: true,
      stats,
      logs
    });
  } catch (error: any) {
    console.error('Audit API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error performing image audit.', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const supabase = createAdminClient();
    const { data: properties, error: dbError } = await supabase
      .from('properties')
      .select('*');

    if (dbError) throw dbError;
    if (!properties) {
      return NextResponse.json({ success: true, repaired: 0 });
    }

    const storageFiles = await listStorageFiles();
    const logs: string[] = [];
    let repairedCount = 0;

    await Promise.all(
      properties.map(async (p) => {
        const firstImage = p.images?.[0];
        if (!firstImage) {
          logs.push(`Property ${p.id}: Missing images. Attempting repair...`);
          const repaired = await repairPropertyImages(p, storageFiles);
          if (repaired.images && repaired.images.length > 0) {
            repairedCount++;
            logs.push(`Property ${p.id}: Repaired successfully.`);
          }
          return;
        }

        const isValid = await checkImageUrl(firstImage);
        if (!isValid) {
          logs.push(`Property ${p.id} (${p.title}): Image is broken. Repairing...`);
          const repaired = await repairPropertyImages(p, storageFiles);
          if (repaired.images?.[0]) {
            const isRepairedValid = await checkImageUrl(repaired.images[0]);
            if (isRepairedValid) {
              repairedCount++;
              logs.push(`Property ${p.id} (${p.title}): Repaired successfully with alternative: ${repaired.images[0]}`);
            } else {
              logs.push(`Property ${p.id} (${p.title}): Repair attempted but alternative is also broken.`);
            }
          }
        }
      })
    );

    return NextResponse.json({
      success: true,
      repaired: repairedCount,
      logs
    });
  } catch (error: any) {
    console.error('Audit Repair API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error performing repairs.', details: error.message },
      { status: 500 }
    );
  }
}
