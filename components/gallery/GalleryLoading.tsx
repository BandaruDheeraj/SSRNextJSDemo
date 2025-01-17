import { Skeleton } from '@/components/ui/skeleton';

export function GalleryLoading() {
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <Skeleton
            key={index}
            className="aspect-[3/2] rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}