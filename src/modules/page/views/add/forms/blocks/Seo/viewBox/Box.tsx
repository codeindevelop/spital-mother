// src/modules/page/forms/blocks/seo/boxes/Box.tsx
import React from 'react';

interface Props {
  title: string;
  description: string;
  isMobile: boolean;
}

function Box({ title, description, isMobile }: Props) {
  return (
    <div
      className={`flex flex-col items-start justify-between border border-primary rounded-lg p-5 ${
        isMobile ? 'max-w-lg' : 'max-w-[400px]'
      } w-full`}
    >
      <h2 className="text-sm">
        عنوان: <span className="font-bold text-primary">{title}</span>
      </h2>
      <p className="text-sm">
        توضیحات: <span className="text-sm">{description}</span>
      </p>
    </div>
  );
}

export default Box;
