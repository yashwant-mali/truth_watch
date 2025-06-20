"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

let socket;

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io("http://localhost:3000", {
      path: "/api/socket",
    });

    socket.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send-message", input);
    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Real-time Chat</h2>
      <div className="border rounded p-4 h-64 overflow-y-auto mb-2 bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className="mb-1 text-sm">
            {msg}
          </div>
        ))}
      </div>
      <input
        className="border p-2 w-full mb-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
