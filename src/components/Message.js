import moment from "moment";
function Message({ id, message, timestamp, name, email, photoURL }) {
  return (
    <div className="flex p-2 items-center pl-5 my-5 mr-2 hover:bg-[#32353b] group">
      <img
        src={photoURL}
        alt=""
        className="h-10 rounded-full cursor-pointer mr-3 hover:shadow-xl"
      />
      <div className="flex flex-col ">
        <h4 className="flex items-center space-x-2 font-medium">
          <span className="hover:underline text-white  text-xs">{name}</span>
          <span className="text-[#72767d] text-xs">
            {moment(timestamp?.toDate().getTime()).format("MMM D YYYY, h:mm a")}
          </span>
        </h4>
        <p className="text-white text-xs">{message}</p>
      </div>
    </div>
  );
}

export default Message;
