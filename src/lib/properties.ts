import { createAdminClient } from './supabase/admin';

export async function checkImageUrl(url: string): Promise<boolean> {
  if (!url) return false;
  // Quick offline check to prevent slow network requests, rate limiting, and hanging timeouts
  return url.startsWith('http://') || url.startsWith('https://');
}

export async function listStorageFiles(): Promise<string[]> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase.storage.from('properties').list();
    if (error) {
      console.error('Error listing storage files:', error);
      return [];
    }
    return data ? data.map(f => f.name) : [];
  } catch (err) {
    console.error('Failed to list storage:', err);
    return [];
  }
}

const FALLBACK_IMAGES: Record<string, string[]> = {
  villas: [
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  ],
  apartments: [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80'
  ],
  commercial: [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80'
  ],
  land: [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1444312645910-ffa973656eba?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80'
  ]
};

function getFallbackImageByCategory(title: string, propId: string): string {
  const t = (title || '').toLowerCase();
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
  
  const list = FALLBACK_IMAGES[cat] || FALLBACK_IMAGES['villas'];
  const seed = (propId || '').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) || 7;
  const index = seed % list.length;
  return list[index];
}

export async function repairPropertyImages(property: any, storageFiles: string[]): Promise<any> {
  let images = [...(property.images || [])];
  const gallery = [...(property.gallery || [])];
  
  const genericFallback = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
  
  // Clean up if first image is the generic fallback and there are other unique images in the array
  if (images[0] === genericFallback && images.length > 1) {
    images = images.filter(img => img !== genericFallback);
  }

  // Potential image candidates in priority order
  const candidates: string[] = [];
  if (property.featured_image) candidates.push(property.featured_image);
  if (property.cover_image) candidates.push(property.cover_image);
  if (gallery.length > 0 && gallery[0]) candidates.push(gallery[0]);
  if (images.length > 0 && images[0]) candidates.push(images[0]);

  // Add other images in the array
  for (let i = 1; i < images.length; i++) {
    if (images[i]) candidates.push(images[i]);
  }
  for (let i = 1; i < gallery.length; i++) {
    if (gallery[i]) candidates.push(gallery[i]);
  }

  // Filter out any candidates that match the generic fallback to prioritize unique images
  const uniqueCandidates = candidates.filter(url => url !== genericFallback);

  // 1. Try to find the first candidate that is a valid URL format
  for (const url of uniqueCandidates) {
    const isValid = await checkImageUrl(url);
    if (isValid) {
      const updatedImages = [url, ...images.filter(img => img !== url)];
      return { ...property, images: updatedImages };
    }
  }

  // 2. Check storage files
  const fileExts = ['jpg', 'jpeg', 'png', 'webp'];
  for (const ext of fileExts) {
    const filename = `${property.id}.${ext}`;
    if (storageFiles.includes(filename)) {
      const supabase = createAdminClient();
      const { data } = supabase.storage.from('properties').getPublicUrl(filename);
      const publicUrl = data.publicUrl;
      const updatedImages = [publicUrl, ...images];
      return { ...property, images: updatedImages };
    }
  }

  // 3. Fallback to category-specific beautiful fallback image
  const categoryFallback = getFallbackImageByCategory(property.title || '', property.id);
  const updatedImages = [categoryFallback, ...images.filter(img => img !== categoryFallback)];
  
  return { ...property, images: updatedImages };
}
