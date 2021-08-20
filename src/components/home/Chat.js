import { useSelector } from "react-redux";
import {
  selectChannelId,
  selectChannelName,
} from "../../features/channelSlice";

function Chat() {
  const channelName = useSelector(selectChannelName);
  const channelId = useSelector(selectChannelId);
  
  return (
    <div>
      <header></header>
    </div>
  );
}

export default Chat;
