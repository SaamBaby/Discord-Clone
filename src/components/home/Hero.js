import { DownloadIcon } from "@heroicons/react/outline";
function Hero() {
  // when ever you change from flex row to column justify center and
  // align direction change its function
  // in flex col justify ceter align vertically in the center
  return (
    <div>
      <div className="bg-discord_blue pb-8 p-5 md:pb-0">
        <div className=" h-83vh md:h-83vh  md:flex p-7 py-9  relative flex  ">
          <div
            className=" flex flex-col gap-7 md:max-w-md lg:max-w-none
        lg:justify-center"
          >
            <h1 className="text-5xl text-white font-black uppercase">
              Your place to talk
            </h1>
            <h2 className="text-md text-white font-norml tracking-wide lg:max-w-3xl w-full">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col  gap-6 lg:flex-row md:items-start sm:items-center">
              <button className="flex bg-white py-5 w-60 rounded-full items-center justify-center">
                <DownloadIcon className="text-black w-6  mr-2" />
                <h3 className="text-md font-semibold">Download for Mac</h3>
              </button>
              <button className="flex bg-black py-5 text-white   w-[15.5em]  rounded-full items-center justify-center">
                <h3 className="text-md font-semibold">
                  Open Discord in your browser
                </h3>
              </button>
            </div>
          </div>
          <div className="flex-grow">
            <img
              src="https://rb.gy/ohwmdy"
              alt=""
              className="absolute bottom-10 -left-36 mt-28 sm:-left-44 md:hidden"
            />
            <img
              src="https://rb.gy/gjs8ch"
              alt=""
              className="hidden md:inline absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
