import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { checkImageUrl, listStorageFiles, repairPropertyImages } from '@/lib/properties';

export async function GET(req: NextRequest) {
  try {
    const supabase = createAdminClient();
    const { data: properties, error: dbError } = await supabase
      .from('properties')
      .select('id, title, location, price, bedrooms, bathrooms, sqft, description, images, features, created_at');

    if (dbError) {
      throw dbError;
    }

    if (!properties) {
      return NextResponse.json({ success: true, count: 0, properties: [] });
    }

    const storageFiles = await listStorageFiles();

    // Perform in-memory validation and fallback resolution without making slow network requests
    const auditedProperties = properties.map((prop) => {
      let images = [...(prop.images || [])];
      const genericFallback = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';

      // 1. Restore unique images if the first image was overwritten by the generic fallback
      if (images[0] === genericFallback && images.length > 1) {
        images = images.filter(img => img !== genericFallback);
      }

      // 2. Ensure we have at least one image; otherwise, resolve a beautiful category-specific fallback image
      if (images.length === 0 || !images[0] || images[0].includes('placeholder')) {
        const title = prop.title || '';
        const t = title.toLowerCase();
        let cat = 'villas';
        
        if (t.includes('villa') || t.includes('bungalow') || t.includes('row house') || t.includes('duplex') || t.includes('house') || t.includes('townhouse') || t.includes('farmhouse')) {
          cat = 'villas';
        } else if (t.includes('apartment') || t.includes('penthouse') || t.includes('flat') || t.includes('studio')) {
          cat = 'apartments';
        } else if (t.includes('office') || t.includes('retail') || t.includes('business') || t.includes('coworking') || t.includes('showroom') || t.includes('commercial') || t.includes('warehouse') || t.includes('industrial') || t.includes('factory')) {
          cat = 'commercial';
        } else if (t.includes('land') || t.includes('farm') || t.includes('plot') || t.includes('estate')) {
          cat = 'land';
        }

        const fallbackUrls: Record<string, string> = {
          villas: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
          apartments: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
          commercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
          land: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
        };
        images = [fallbackUrls[cat] || fallbackUrls.villas];
      }

      return {
        ...prop,
        images
      };
    });

    const validProperties = auditedProperties;

    return NextResponse.json({
      success: true,
      count: validProperties.length,
      properties: validProperties
    });
  } catch (error: any) {
    console.error('Portfolio API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error fetching portfolio properties.', details: error.message },
      { status: 500 }
    );
  }
}
