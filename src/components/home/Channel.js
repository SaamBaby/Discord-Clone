import { HashtagIcon } from "@heroicons/react/outline";
function Channel({ id, channelName }) {
  return (
    <div className="px-2 p-1 rounded-md hover:text-white text-sm font-medium flex items-center cursor-pointer hover:bg-[#3a3c43]">
      <HashtagIcon className="h-5 mr-2" />
      {channelName}
    </div>
  );
}

export default Channel;
