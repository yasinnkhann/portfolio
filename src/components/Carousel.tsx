import React, { useState, createRef } from 'react';
import { Helmet } from 'react-helmet';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useSwipeable } from 'react-swipeable';

export default function Carousel({ images }) {
  const [currImgIdx, setCurrImgIdx] = useState(0);

  const refs = images.reduce((acc: any, _: any, idx: number) => {
    acc[idx] = createRef();
    return acc;
  }, {});

  const scrollToImage = (idx: number) => {
    setCurrImgIdx(idx);

    refs[idx].current.scrollIntoView({
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

  const arrowStyle = `absolute top-[50%] text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center`;

  const renderSliderControl = (direction: string) => (
    <button
      type="button"
      onClick={direction === `left` ? previousImage : nextImage}
      className={`${arrowStyle} ${direction === `left` ? `left-2` : `right-2`}`}
    >
      <span
        role="img"
        aria-label={`Arrow ${direction === `left` ? `left` : `right`}`}
      >
        {direction === `left` ? (
          <i className="fa-solid fa-chevron-left" />
        ) : (
          <i className="fa-solid fa-chevron-right" />
        )}
      </span>
    </button>
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: previousImage,
  });

  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/5c2d069c26.js"
          crossOrigin="anonymous"
          defer
        />
      </Helmet>

      <section className="w-screen flex justify-center">
        <div className="px-10 pt-5 flex justify-center w-screen md:w-1/2 items-center">
          <div className="relative w-full">
            <div
              {...swipeHandlers}
              className="inline-flex overflow-x-hidden snap-x snap-mandatory scrollbar-hide touch-pan-x"
              // scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; in CSS
            >
              {renderSliderControl(`left`)}
              {renderSliderControl(`right`)}
              {images.map((img: any, i: number) => (
                <div
                  className="w-full flex-shrink-0 snap-center"
                  // eslint-disable-next-line
                  key={i}
                  ref={refs[i]}
                >
                  <GatsbyImage
                    image={img}
                    className="w-full object-contain"
                    alt=""
                  />
                </div>
              ))}

              <div className="absolute w-full flex justify-center bottom-0">
                {images.map((_: any, idx: number) => (
                  <div
                    className={
                      idx === currImgIdx
                        ? `h-2 w-2 bg-blue-700 rounded-full mx-2 mb-5 cursor-pointer`
                        : `h-2 w-2 bg-gray-400 rounded-full mx-2 mb-5 cursor-pointer`
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
