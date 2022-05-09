import React from 'react';

export default function NotFound() {
  if (typeof document !== `undefined`) {
    document.body.style.backgroundColor = `rgba(51, 204, 153, 1)`;
    document.body.style.color = `#fff`;
    document.body.style.fontFamily = `Open Sans, sans-serif`;
    document.body.style.maxHeight = `700px`;
    document.body.style.overflow = `hidden`;
  }

  return (
    <>
      <section>
        <div className="bg-white h-[120px] mx-auto mb-5 mt-32 absolute w-[350px] rounded-[100px] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[180px] before:h-[180px] before:top-[-90px] before:right-[50px] before:rounded-[200px] after:w-[100px] after:h-[100px] after:top-[-50px] after:left-[50px] after:rounded-[100px] after:content-[''] after:absolute after:bg-white after:z-[-1] top-[-50px] left-[100px] scale-[0.3] opacity-[0.9] animate-[moveClouds_15s_linear_infinite]" />

        <div className="bg-white h-[120px] mx-auto mb-5 mt-32 absolute w-[350px] rounded-[100px] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[180px] before:h-[180px] before:top-[-90px] before:right-[50px] before:rounded-[200px] after:w-[100px] after:h-[100px] after:top-[-50px] after:left-[50px] after:rounded-[100px] after:content-[''] after:absolute after:bg-white after:z-[-1] top-[-80px] left-[250px] scale-[0.3] animate-[moveClouds_17s_linear_infinite]" />

        <div className="bg-white h-[120px] mx-auto mb-5 mt-32 absolute w-[350px] rounded-[100px] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[180px] before:h-[180px] before:top-[-90px] before:right-[50px] before:rounded-[200px] after:w-[100px] after:h-[100px] after:top-[-50px] after:left-[50px] after:rounded-[100px] after:content-[''] after:absolute after:bg-white after:z-[-1] left-[250px] top-[30px] scale-[0.6] opacity-[0.6] animate-[moveClouds_25s_linear_infinite]" />

        <div className="bg-white h-[120px] mx-auto mb-5 mt-32 absolute w-[350px] rounded-[100px] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[180px] before:h-[180px] before:top-[-90px] before:right-[50px] before:rounded-[200px] after:w-[100px] after:h-[100px] after:top-[-50px] after:left-[50px] after:rounded-[100px] after:content-[''] after:absolute after:bg-white after:z-[-1] left-[250px] bottom-[-70px] scale-[0.6] opacity-[0.8] animate-[moveClouds_25s_linear_infinite]" />

        <div className="bg-white h-[120px] mx-auto mb-5 mt-32 absolute w-[350px] rounded-[100px] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[180px] before:h-[180px] before:top-[-90px] before:right-[50px] before:rounded-[200px] after:w-[100px] after:h-[100px] after:top-[-50px] after:left-[50px] after:rounded-[100px] after:content-[''] after:absolute after:bg-white after:z-[-1] left-[470px] bottom-[20px] scale-[0.75] opacity-[0.75] animate-[moveClouds_18s_linear_infinite]" />

        <div className="bg-white h-[120px] mx-auto mb-5 mt-32 absolute w-[350px] rounded-[100px] z-[-1] transition duration-1000 ease-linear bg-gradient-to-t from-white to-[100%] before:content-[''] before:absolute before:bg-white before:z-[-1] before:w-[180px] before:h-[180px] before:top-[-90px] before:right-[50px] before:rounded-[200px] after:w-[100px] after:h-[100px] after:top-[-50px] after:left-[50px] after:rounded-[100px] after:content-[''] after:absolute after:bg-white after:z-[-1] left-[200px] top-[300px] scale-[0.5] opacity-[0.8] animate-[moveClouds_20s_linear_infinite]" />
      </section>

      <section className="block my-[100px] mx-auto relative text-center w-[80%]">
        <div className="inline-block h-[250px] relative z-[2] text-[220px] tracking-[15px]">
          404
        </div>
        <hr className="border-white border-solid border-t-4 h-2 my-0 mx-auto p-0 text-center text-white w-[420px] z-[-10] after:inline-block after:text-3xl after:py-0 after:px-1 after:relative after:content-[\u2022]" />
        <div className="block text-[4em] relative text-center tracking-[12px] leading-[80%] my-2">
          THE PAGE
        </div>
        <div className="text-center block relative text-xl my-2">
          WAS NOT FOUND
        </div>
        <button
          className="inline-block text-2xl my-0 mr-2 ml-auto p-1 relative no-underline w-[358px] z-[5] text-[#33cc99]"
          type="button"
        >
          HOW DID YOU GET HERE?
        </button>
      </section>
    </>
  );
}
