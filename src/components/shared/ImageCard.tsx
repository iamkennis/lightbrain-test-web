import React from 'react';

interface ImageCardProps {
  title: string;
  imageUrl: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded shadow-sm">
      <img src={imageUrl} alt={title} className="object-cont w-full h-full transition-all hover:scale-105" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
        {title}
      </div>
    </div>
  );
}

export default ImageCard;

