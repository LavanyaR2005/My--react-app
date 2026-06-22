import { useState } from "react";

function Chat() {

const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

const selectedUser =
JSON.parse(localStorage.getItem("selectedChatUser"));

const [message, setMessage] = useState("");

const [messages, setMessages] = useState(
JSON.parse(localStorage.getItem("privateMessages")) || []
);

const sendMessage = () => {

if (!message.trim()) return;

const newMessage = {
  sender: currentUser.email,
  receiver: selectedUser.email,
  senderName: currentUser.name,
  text: message,
  time: new Date().toLocaleString()
};

const updatedMessages = [
  ...messages,
  newMessage
];

localStorage.setItem(
  "privateMessages",
  JSON.stringify(updatedMessages)
);

setMessages(updatedMessages);
setMessage("");


};

const chatMessages = messages.filter(
(msg) =>
(msg.sender === currentUser.email &&
msg.receiver === selectedUser.email) ||
(msg.sender === selectedUser.email &&
msg.receiver === currentUser.email)
);

return ( <div className="page-container">

```
  <h1>
    Chat with {selectedUser?.name}
  </h1>

  <div className="chat-box">

    {chatMessages.map((msg, index) => (

      <div
        key={index}
        className={
          msg.sender === currentUser.email
            ? "my-message"
            : "other-message"
        }
      >

        <strong>
          {msg.senderName}
        </strong>

        <p>{msg.text}</p>

        <small>{msg.time}</small>

      </div>

    ))}

  </div>

  <div className="chat-input">

    <input
      type="text"
      value={message}
      onChange={(e) =>
        setMessage(e.target.value)
      }
      placeholder="Type message..."
    />

    <button
      onClick={sendMessage}
    >
      Send
    </button>

  </div>

</div>


);
}

export default Chat;
