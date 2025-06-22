"use client";
import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function Profile() {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // bgcolor: "#f0f2f5",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          p: 3,
          boxShadow: 3,
          borderRadius: 3,
          bgcolor: "#f0f2f5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Avatar sx={{ bgcolor: deepPurple[500], width: 80, height: 80 }}>
            Y
          </Avatar>
        </Box>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Yashwant Mali
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            gutterBottom
          >
            yashwantmali555@gmail.com
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ fontStyle: "italic", mt: 2 }}
          >
            "Always keep going"
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
