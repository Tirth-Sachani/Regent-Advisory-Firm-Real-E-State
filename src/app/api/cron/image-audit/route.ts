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
      return NextResponse.json({ success: true, message: 'No properties to audit.' });
    }

    const storageFiles = await listStorageFiles();
    let repairedCount = 0;

    await Promise.all(
      properties.map(async (p) => {
        const firstImage = p.images?.[0];
        if (!firstImage) {
          const repaired = await repairPropertyImages(p, storageFiles);
          if (repaired.images && repaired.images.length > 0) {
            repairedCount++;
          }
          return;
        }

        const isValid = await checkImageUrl(firstImage);
        if (!isValid) {
          const repaired = await repairPropertyImages(p, storageFiles);
          if (repaired.images?.[0]) {
            const isRepairedValid = await checkImageUrl(repaired.images[0]);
            if (isRepairedValid) {
              repairedCount++;
            }
          }
        }
      })
    );

    return NextResponse.json({
      success: true,
      message: 'Daily Cron Image Audit Completed Successfully.',
      repaired: repairedCount
    });
  } catch (error: any) {
    console.error('Cron Image Audit Error:', error);
    return NextResponse.json(
      { error: 'Internal server error performing cron audit.', details: error.message },
      { status: 500 }
    );
  }
}
