import { MenuIcon } from "@heroicons/react/solid";
function Header() {
  // here we are using the onject contain the aspect ratio of the
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
      <a href="/">
        <img
          src="https://rb.gy/it5msp"
          alt=""
          className="w-32 h-12 object-contain"
        />
      </a>
      <div className="hidden lg:flex space-x-6 text-white">
        <a href="/" className=" link ">
          Download
        </a>
        <a href="/" className=" link ">
          Why Discord
        </a>
        <a href="/" className=" link ">
          Nitro{" "}
        </a>
        <a href="/" className=" link">
          Safety
        </a>
        <a href="/" className="link ">
          Support
        </a>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-white  text-xs md:text-sm
         font-medium rounded-2xl p-2 px-4 focus:outline-none text-black
         hover:shadow-2xl hover:text-discord_blurple transition duration-250 ease-in-out whitespace-nowrap  "
        >
          Login
        </button>
        <MenuIcon className="h-6 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  );
}

export default Header;
