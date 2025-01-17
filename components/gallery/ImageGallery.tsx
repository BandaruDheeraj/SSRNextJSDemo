'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

type ImageType = {
  id: number;
  url: string;
  author: string;
};

type Props = {
  initialImages: ImageType[];
};

type ClientPrincipal = {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
};

export function ImageGallery({ initialImages }: Props) {
  const [images, setImages] = useState(initialImages);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    fetch('/.auth/me')
      .then(response => response.json())
      .then(data => {
        setIsAuthenticated(!!data.clientPrincipal);
        setLoading(false);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 min-h-[400px]">
        <p>Please log in to view the image gallery</p>
        <Button asChild>
          <a href="/.auth/login/github">Login with GitHub</a>
        </Button>
      </div>
    );
  }

  async function refreshGallery() {
    setIsLoading(true);
    try {
      // Generate unique IDs for new images
      const usedIds = new Set();
      const imageIds = [];
      
      while (imageIds.length < 9) {
        const id = Math.floor(Math.random() * 1000);
        if (!usedIds.has(id)) {
          usedIds.add(id);
          imageIds.push(id);
        }
      }

      const newImages = imageIds.map(id => ({
        id,
        url: `https://picsum.photos/id/${id}/300/200`,
        author: `Photographer ${id}`,
      }));
      setImages(newImages);
    } catch (error) {
      console.error('Failed to refresh images:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <Button
          onClick={refreshGallery}
          disabled={isLoading}
          className="group"
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-300'}`} />
          Refresh Gallery
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            <div className="aspect-[3/2] overflow-hidden rounded-lg bg-muted">
              <Image
                src={image.url}
                alt={`Random image by ${image.author}`}
                width={300}
                height={200}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
              <p className="text-white text-sm">{image.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}