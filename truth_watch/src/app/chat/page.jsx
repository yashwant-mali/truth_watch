"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
    if (!input.trim()) return;
    socket.emit("send-message", input);
    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
          💬 Real-time Chat
        </Typography>

        <Box
          sx={{
            height: 300,
            overflowY: "auto",
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            p: 2,
            mb: 2,
          }}
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                mb: 1,
                px: 2,
                py: 1,
                backgroundColor: "#e3f2fd",
                borderRadius: 2,
                fontSize: "0.95rem",
                wordBreak: "break-word",
              }}
            >
              {msg}
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            size="small"
          />
          <Button
            variant="contained"
            onClick={sendMessage}
            endIcon={<SendIcon />}
            sx={{ px: 3 }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
