import React, { useState, createRef } from 'react';

const images = [
  `https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80`,
  `https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80`,
  `https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80`,
];

export default function Carousel() {
  const [currImgIdx, setCurrImgIdx] = useState(0);

  const refs = images.reduce((acc, _, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    setCurrImgIdx(i);

    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: `smooth`,
      //      Defines vertical alignment.
      block: `nearest`,
      //      Defines horizontal alignment.
      inline: `start`,
    });
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currImgIdx >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currImgIdx + 1);
    }
  };

  const previousImage = () => {
    if (currImgIdx === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currImgIdx - 1);
    }
  };

  const arrowStyle = `absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center`;

  const sliderControl = (isLeft: boolean) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? `left-2` : `right-2`}`}
      style={{ top: `50%` }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? `left` : `right`}`}>
        {isLeft ? `◀` : `▶`}
      </span>
    </button>
  );

  return (
    // Images are placed using inline flex. We then wrap an image in a div
    // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
    <section className="w-screen flex justify-center">
      <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
        <div className="relative w-full">
          <div className="inline-flex overflow-x-hidden snap-x scrollbar-hide">
            {sliderControl(true)}
            {images.map((img, i) => (
              <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                <img src={img} className="w-full object-contain" alt="" />
              </div>
            ))}

            <div className="absolute w-full flex justify-center bottom-0">
              {images.map((_, idx) => (
                <div
                  className={
                    idx === currImgIdx
                      ? `h-2 w-2 bg-blue-700 rounded-full mx-2 mb-5 cursor-pointer`
                      : `h-2 w-2 bg-white rounded-full mx-2 mb-5 cursor-pointer`
                  }
                  aria-hidden="true"
                  // eslint-disable-next-line
                  key={idx}
                  onClick={() => {
                    scrollToImage(idx);
                  }}
                />
              ))}
            </div>
            {sliderControl(false)}
          </div>
        </div>
      </div>
    </section>
  );
}
