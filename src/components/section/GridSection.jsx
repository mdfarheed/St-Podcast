import Image from "next/image";
import React from "react";

const GridSection = () => {
  return (
    <div className="w-full flex justify-center px-4 py-10">
      <div
        className="
        max-w-[1400px] w-full bg-white rounded-3xl shadow-xl 
        p-5 md:p-8 lg:p-10
      "
      >
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT LARGE IMAGE */}
          <div className="w-full h-80 md:h-[400px] lg:h-[450px] overflow-hidden md:rounded-t-2xl">
            <Image
              src="/gridSection/image1.png"
              alt="Main"
              width={1000}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT PURPLE BOX */}
          <div
            className="
            bg-[#5B1EE8] 
            md:rounded-t-2xl p-8 flex flex-col justify-center 
            text-white
          "
          >
            <h2 className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
              At Corporate Podcast Studio, we take care of everything — concept,
              recording, filming, editing, clips, publishing — so your team only
              needs to show up, talk, and shine. You get a powerful video
              podcast + dozens of reels every month.
            </h2>

            {/* BUTTON */}
            <div>
              <button
              className="
                mt-4 px-7 py-5 rounded-xl font-semibold text-white 
                bg-linear-to-r from-pink-500 to-indigo-500 shadow-md
                hover:opacity-90 transition
              "
            >
              Book a Strategy Call
            </button>
            </div>
          </div>
        </div>

        {/* BOTTOM 4 IMAGE GRID */}
        <div className="flex gap-5 mt-6">
          <div className="overflow-hidden">
            <img
              src="/gridSection/image2.png"
              alt="Grid Image 1"
              className="w-160 h-[150px] md:h-[200px] object-cover md:rounded-b-2xl"
            />
          </div>

          <div className=" overflow-hidden hidden md:block">
            <img
              src="/gridSection/image3.png"
              alt="Grid Image 2"
              className="h-[150px] md:h-[200px]  md:rounded-b-2xl"
            />
          </div>

          <div className=" overflow-hidden">
            <img
              src="/gridSection/image4.png"
              alt="Grid Image 3"
              className="w-160 h-[150px] md:h-[200px] object-cover md:rounded-b-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
