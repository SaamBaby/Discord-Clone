function HomeSections() {
  return (
    <div>
      <div className="flex flex-col  px-10 my-40  sm:px-15 md:px-30 lg:px-40">
        <div className=" flex flex-col sm:flex-col md:flex-row lg:gap-32 md:gap-20 lg:my-24">
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

export default HomeSections;
