import { HashtagIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setChannelInfo } from "../../features/channelSlice";
function Channel({ id, channelName }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );
    history.push(`/channels/${id}`);
  };
  return (
    <div
      onClick={setChannel}
      className="px-2 p-1 rounded-md hover:text-white text-sm font-medium flex items-center cursor-pointer hover:bg-[#3a3c43]"
    >
      <HashtagIcon className="h-5 mr-2" />
      {channelName}
    </div>
  );
}

export default Channel;
