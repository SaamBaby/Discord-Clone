import { useSelector } from "react-redux";
import {
  BellIcon,
  ChatIcon,
  EmojiHappyIcon,
  GiftIcon,
  HashtagIcon,
  InboxIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import {
  selectChannelId,
  selectChannelName,
} from "../../features/channelSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRef } from "react";
import firebase from "firebase";
import Message from "../Message";

function Chat() {
  // here  are using he use selector hook to select the selector that we have
  // already created in channel slice folder and import it and put it as an argument
  const inputRef = useRef(null);
  const channelName = useSelector(selectChannelName);
  const channelId = useSelector(selectChannelId);
  const [user] = useAuthState(auth);
  const chatRef = useRef(null);
  const [messages] = useCollection(
    channelId &&
      db
        .collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  const scrollToBottom = () => {
    chatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const sendMessaage = (e) => {
    e.preventDefault();
    if (inputRef.current.value !== "") {
      db.collection("channels").doc(channelId).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: inputRef.current.value,
        name: user?.displayName,
        photoUrl: user?.photoURL,
        email: user?.email,
      });
      inputRef.current.value = "";
      scrollToBottom();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between space-x-5 border-b  border-gray-800 p-4">
        <div className="flex items-center space-x-2">
          <HashtagIcon className="h-6  text-[#72767d]" />
          <h4 className="text-white  mr-10 text-base font-bold">
            {channelName}
          </h4>
          <h4 className="text-[#72767d] text-xs font-normal">
            A place for friends to chat
          </h4>
        </div>
        <div className="flex text-white space-x-2">
          <div className="hover:bg-[#3a3c43] p-2 rounded-md">
            <BellIcon className=" h-5 icon" />
          </div>
          <div className="hover:bg-[#3a3c43] p-2 rounded-md">
            <ChatIcon className=" h-5 icon" />
          </div>
          <div className="hover:bg-[#3a3c43] p-2 rounded-md">
            <UserIcon className=" h-5 icon" />
          </div>
          <div className="bg-[#202225] text-xs p-1 rounded-md flex  items-center">
            <input
              type="text"
              placeHolder="Search"
              className="bg-transparent focus:outline-none  text-white pl-1
                placeholder-[#72767d]"
            />
            <SearchIcon className="h-4 text-[#72767d]" />
          </div>
          <div className="hover:bg-[#3a3c43] p-2 rounded-md">
            <InboxIcon className=" h-5 icon" />
          </div>
          <div className="hover:bg-[#3a3c43] p-2 rounded-md">
            <QuestionMarkCircleIcon className=" h-5 icon" />
          </div>
        </div>
      </header>
      <main className=" flex-grow overflow-y-scroll scrollbar-hide">
        ({/* Self Closing div */}
        {messages?.docs.map((doc) => {
          const { message, timestamp, name, photoURL, email } = doc.data();
          return (
            <Message
              key={doc.id}
              id={doc.id}
              message={message}
              timestamp={timestamp}
              name={name}
              email={email}
              photoURL={photoURL}
            />
          );
        })}
        <div ref={chatRef} className="pb-16"></div>)
      </main>
      <div className="flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg">
        <PlusCircleIcon className="icon  hover: text-[#dcddde]" />
        <form className="flex-grow">
          <input
            className="bg-transparent p-1 text-xs placeholder-[#72767d] text-white focus:outline-none w-full"
            type="text"
            ref={inputRef}
            disabled={!channelId}
            placeHolder={
              channelId ? `Message #${channelName}` : "Select a channel"
            }
          />
          <button hidden type="submit" onClick={sendMessaage}>
            Send
          </button>
        </form>
        <GiftIcon className="icon mr-2" />
        <EmojiHappyIcon className="icon " />
      </div>
    </div>
  );
}

export default Chat;
