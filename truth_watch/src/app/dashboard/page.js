'use client';
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Stack,
  IconButton,
  Drawer,
  List,
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Container,
  Paper
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { blue, red } from "@mui/material/colors";

export default function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Section 1: News Selection */}
      <Paper
        elevation={4}
        sx={{
          backgroundColor: "white",
          color: "black",
          height: { xs: "auto", md: '50vh' },
          p: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: 4,
          mb: 4
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Want to Watch Recent News?
        </Typography>

        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            display: "flex",
            flexDirection: "column",
            gap: 3,
            m: 0,
            p: 0
          }}
        >
          <Link href="/news" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: 200,
                borderRadius: 3,
                fontWeight: 600,
                textTransform: "capitalize"
              }}
            >
              Indian News
            </Button>
          </Link>
          <Link href="/news/global" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: 200,
                borderRadius: 3,
                fontWeight: 600,
                textTransform: "capitalize"
              }}
            >
              Global News
            </Button>
          </Link>
        </Box>
      </Paper>

      {/* Section 2: AI Assistant */}
      <Paper
        elevation={4}
        sx={{
          backgroundColor: "#f5f5f5",
          color: "black",
          height: { xs: "auto", md: '50vh' },
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          mb: 4,
          gap: 2
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Use AI for Your Answers
        </Typography>
        <Link href="/yashgpt" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            color="success"
            sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 600 }}
          >
            Chat with YashGPT
          </Button>
        </Link>
      </Paper>

      <Grid container spacing={12} sx={{ py: 1, pl: 4 }}>
        {/* Card 1 - Let's Chat */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              height: 300,
              borderRadius: 3,
              p: 4,
              backgroundColor: "#e3f2fd",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%", // ✅ allow Grid to control width
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              💬 Let’s Chat
            </Typography>
            <Link href="/chat" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Message Now
              </Button>
            </Link>
          </Paper>
        </Grid>

        {/* Card 2 - Another Feature */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              height: 300,
              borderRadius: 3,
              p: 4,
              backgroundColor: "#e3f2fd",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              🚀 Another Feature
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is a placeholder for additional content. Add analytics, reports, or actions here.
            </Typography>
          </Paper>
        </Grid>


        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              height: 300,
              borderRadius: 3,
              p: 4,
              backgroundColor: "#e3f2fd",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%", // ✅ allow Grid to control width
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Generate Report
            </Typography>
            <Link href="/chat" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Download
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>





    </Box>
  );
}
