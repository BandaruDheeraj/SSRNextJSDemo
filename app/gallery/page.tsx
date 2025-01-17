import { Suspense } from 'react';
import { ImageGallery } from '@/components/gallery/ImageGallery';
import { GalleryLoading } from '@/components/gallery/GalleryLoading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dynamic Image Gallery',
  description: 'A server-side rendered gallery of random images',
};

async function getRandomImages() {
  try {
    // Generate an array of unique IDs
    const usedIds = new Set();
    const imageIds = [];
    
    while (imageIds.length < 9) {
      const id = Math.floor(Math.random() * 1000);
      if (!usedIds.has(id)) {
        usedIds.add(id);
        imageIds.push(id);
      }
    }

    return imageIds.map(id => ({
      id,
      url: `https://picsum.photos/id/${id}/300/200`,
      author: `Photographer ${id}`,
    }));
  } catch (error) {
    console.error('Failed to fetch images:', error);
    return [];
  }
}

export default async function GalleryPage() {
  const images = await getRandomImages();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Dynamic Image Gallery</h1>
      <Suspense fallback={<GalleryLoading />}>
        <ImageGallery initialImages={images} />
      </Suspense>
    </div>
  );
}