import {
  AttachFile,
  DonutLargeOutlined,
  InsertEmoticonOutlined,
  MoreVertOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import MicIcon from "@mui/icons-material/Mic";
import { useParams } from "react-router-dom";
import db from "./firebase";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You Typed >>>>>>>", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at ---</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <DonutLargeOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Md Anas Sabah</span>
          Hello There! I'm using my own Chat messenger
          <span className="chat__timestamp">7:00 PM</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonOutlined />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send
          </button>
        </form>
        <IconButton>
          {" "}
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
