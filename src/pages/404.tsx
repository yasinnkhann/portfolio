import React from 'react';

export default function NotFound() {
  if (typeof document !== `undefined`) {
    document.body.style.backgroundColor = `rgba(51, 204, 153, 1)`;
    document.body.style.color = `#fff`;
    document.body.style.fontFamily = `Open Sans, sans-serif`;
    document.body.style.maxHeight = `43.75rem`;
    document.body.style.overflow = `hidden`;
  }

  return (
    <section>
      <div>
        <div className="bg-white h-[7.5rem] mx-auto mb-5 mt-32 absolute w-[21.875rem] rounded-[6.25rem] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[11.25rem] before:h-[11.25rem] before:top-[-5.625rem] before:right-[3.125rem] before:rounded-[12.5rem] after:w-[6.25rem] after:h-[6.25rem] after:top-[-3.125rem] after:left-[3.125rem] after:rounded-[6.25rem] after:content-[''] after:absolute after:bg-white after:z-[-1] top-[-3.125rem] left-[6.25rem] scale-[0.3] opacity-[0.9] animate-[moveClouds_15s_linear_infinite]" />

        <div className="bg-white h-[7.5rem] mx-auto mb-5 mt-32 absolute w-[21.875rem] rounded-[6.25rem] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[11.25rem] before:h-[11.25rem] before:top-[-5.625rem] before:right-[3.125rem] before:rounded-[12.5rem] after:w-[6.25rem] after:h-[6.25rem] after:top-[-3.125rem] after:left-[3.125rem] after:rounded-[6.25rem] after:content-[''] after:absolute after:bg-white after:z-[-1] top-[-rem] left-[15.625rem] scale-[0.3] animate-[moveClouds_17s_linear_infinite]" />

        <div className="bg-white h-[7.5rem] mx-auto mb-5 mt-32 absolute w-[21.875rem] rounded-[6.25rem] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[11.25rem] before:h-[11.25rem] before:top-[-5.625rem] before:right-[3.125rem] before:rounded-[12.5rem] after:w-[6.25rem] after:h-[6.25rem] after:top-[-3.125rem] after:left-[3.125rem] after:rounded-[6.25rem] after:content-[''] after:absolute after:bg-white after:z-[-1] left-[15.625rem] top-[1.875rem] scale-[0.6] opacity-[0.6] animate-[moveClouds_25s_linear_infinite]" />

        <div className="bg-white h-[7.5rem] mx-auto mb-5 mt-32 absolute w-[21.875rem] rounded-[6.25rem] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[11.25rem] before:h-[11.25rem] before:top-[-5.625rem] before:right-[3.125rem] before:rounded-[12.5rem] after:w-[6.25rem] after:h-[6.25rem] after:top-[-3.125rem] after:left-[3.125rem] after:rounded-[6.25rem] after:content-[''] after:absolute after:bg-white after:z-[-1] left-[15.625rem] bottom-[-4.375rem] scale-[0.6] opacity-[0.8] animate-[moveClouds_25s_linear_infinite]" />

        <div className="bg-white h-[7.5rem] mx-auto mb-5 mt-32 absolute w-[21.875rem] rounded-[6.25rem] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[11.25rem] before:h-[11.25rem] before:top-[-5.625rem] before:right-[3.125rem] before:rounded-[12.5rem] after:w-[6.25rem] after:h-[6.25rem] after:top-[-3.125rem] after:left-[3.125rem] after:rounded-[6.25rem] after:content-[''] after:absolute after:bg-white after:z-[-1] left-[29.375rem] bottom-[1.25rem] scale-[0.75] opacity-[0.75] animate-[moveClouds_18s_linear_infinite]" />

        <div className="bg-white h-[7.5rem] mx-auto mb-5 mt-32 absolute w-[21.875rem] rounded-[6.25rem] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[11.25rem] before:h-[11.25rem] before:top-[-5.625rem] before:right-[3.125rem] before:rounded-[12.5rem] after:w-[6.25rem] after:h-[6.25rem] after:top-[-3.125rem] after:left-[3.125rem] after:rounded-[6.25rem] after:content-[''] after:absolute after:bg-white after:z-[-1] left-[12.5rem] top-[18.75rem] scale-[0.5] opacity-[0.8] animate-[moveClouds_20s_linear_infinite]" />
      </div>

      <div className="block my-[6.25rem] mx-auto relative text-center w-[80%]">
        <div className="inline-block h-[15.625rem] relative z-[2] text-[13.75rem] tracking-[1rem]">
          404
        </div>
        <hr className="border-white border-solid border-t-4 h-2 my-0 mx-auto p-0 text-center text-white w-[26.25rem] z-[-10] after:inline-block after:text-3xl after:py-0 after:px-1 after:relative after:content-[\u2022]" />
        <div className="block text-[4em] relative text-center tracking-[0.75rem] leading-[80%] my-2">
          THE PAGE
        </div>
        <div className="text-center block relative text-xl my-2">
          WAS NOT FOUND
        </div>
        <button
          className="inline-block text-2xl my-0 mr-2 ml-auto p-1 relative no-underline w-[22.375rem] z-[5] text-[#33cc99]"
          type="button"
        >
          HOW DID YOU GET HERE?
        </button>
      </div>
    </section>
  );
}
