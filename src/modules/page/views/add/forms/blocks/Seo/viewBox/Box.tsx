// src/modules/page/forms/blocks/seo/boxes/Box.tsx
import React from 'react';

interface Props {
  title: string;
  description: string;
  isMobile: boolean;
  image?: string;
}

function Box({ title, description, isMobile, image }: Props) {
  return (
    <div
      className={`    items-start w-full   h-full border border-primary rounded-lg p-5 ${
        isMobile ? 'max-w-sm' : 'max-w-[500px]'
      } `}
    >
      {image && (
        <img
          src={image}
          alt="OG Image Preview"
          className="mb-3 rounded-lg"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
      <div className=" p-5 h-full max-w-sm relative bg-gray-200 rounded-lg mb-3 flex flex-col items-center justify-center">
        <h2 className="text-sm">
          عنوان: <span className="font-bold text-primary">{title}</span>
        </h2>
        <h3 className="text-sm    w-full h-full  bottom-0 left-0 right-0 text-gray-600 text-center">
          توضیحات: <p className="       overflow-x-scroll">{description}</p>
        </h3>
      </div>
    </div>
  );
}

export default Box;
