"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Page() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const res = await fetch("/api/geminiChat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
          💬 Chat with <span style={{ color: "#1976d2" }}>YashGPT</span>
        </Typography>

        <TextField
          label="Your Message"
          multiline
          rows={4}
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          variant="outlined"
          sx={{ my: 3 }}
        />

        <Button
          onClick={sendMessage}
          variant="contained"
          endIcon={<SendIcon />}
          fullWidth
          sx={{ py: 1.2 }}
        >
          Send
        </Button>

        {response && (
          <>
            <Divider sx={{ my: 4 }} />
            <Typography variant="h6" gutterBottom>
              🤖 YashGPT's Response:
            </Typography>
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                p: 3,
                borderRadius: 2,
                fontSize: "1rem",
                lineHeight: 1.8,
                maxHeight: "60vh",
                overflowY: "auto",
              }}
            >
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 style={{ color: "#0d47a1" }} {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 style={{ color: "#b71c1c" }} {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong style={{ color: "#bf360c" }} {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li style={{ marginLeft: "1.5em" }} {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul style={{ marginBottom: "1em" }} {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p style={{ marginBottom: "1em" }} {...props} />
                  ),
                }}
              >
                {response}
              </ReactMarkdown>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
}
