import React from 'react';

type Props = {};

function Box() {
  return (
    <>
      <div className="  flex items-start flex-col justify-start gap-3.5 max-w-[500px] w-full   border border-1 border-primary rounded-lg p-5">
        <h2 className="text-sm">
          عنوان : <span className="font-bold text-primary">متن</span>
        </h2>
        <p className="text-sm">
          توضیحات : <span className="font-bold text-primary">توضیحات متا</span>
        </p>
      </div>
    </>
  );
}

export default Box;
