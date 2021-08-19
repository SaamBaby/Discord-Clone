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
      <div className="flex flex-col  px-10 mt-10 my-20  sm:px-15 md:px-30 lg:px-40">
        <div className=" flex flex-col sm:flex-col md:flex-row lg:gap-32 md:gap-20 lg:my-20">
          <img
            className=" md:max-w-md lg:max-w-2xl"
            src="https://discord.com/assets/46b2132c01604c9493d558de444929f4.svg"
            alt=""
          />
          <div className="w-full  md:max-w-md lg:max-w-lg gap-20">
            <h1 className=" font-black text-lg md:text-4xl lg:text-5xl">
              Create an invite-only place where you belong
            </h1>
            <h2 className=" font-normal lg:text-base mt-16">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </h2>
          </div>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row lg:gap-32 md:gap-20 lg:my-24">
          <div className="w-full  md:max-w-md lg:max-w-lg gap-20">
            <h1 className=" font-black text-lg md:text-4xl lg:text-5xl">
              Where hanging out is easy
            </h1>
            <h2 className=" font-normal lg:text-base mt-16">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </h2>
          </div>
          <img
            className=" md:max-w-md lg:max-w-2xl"
            src="https://discord.com/assets/921b1ae33edca174b6ebe787bb8b6c3b.svg"
            alt=""
          />
        </div>
        <div className=" flex flex-col sm:flex-col md:flex-row lg:gap-32 md:gap-20 lg:my-24">
          <img
            className=" md:max-w-md lg:max-w-2xl"
            src="https://discord.com/assets/575a0322f3b36ca2fecb23ad2c6dd5ad.svg"
            alt=""
          />
          <div className="w-full  md:max-w-md lg:max-w-lg gap-20">
            <h1 className=" font-black text-lg md:text-4xl lg:text-5xl">
              Where hanging out is easy
            </h1>
            <h2 className=" font-normal lg:text-base mt-16">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </h2>
          </div>
        </div>
        {/* <div className=" flex flex-col  lg:gap-32 md:gap-20">
          <div className="w-full  md:max-w-md lg:max-w-lg gap-20">
            <h1 className=" font-black text-xl md:text-4xl lg:text-5xl">
              RELIABLE TECH FOR STAYING CLOSE
            </h1>
            <h2 className=" font-normal lg:text-base mt-16">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </h2>
          </div>
          <img
            className=" md:max-w-4xl lg:max-w-5xl"
            src="https://discord.com/assets/98ea5b9e92e304c7d352ac462996adc5.svg"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
