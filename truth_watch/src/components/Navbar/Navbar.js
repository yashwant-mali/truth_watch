"use client"; // Add this if using App Router in Next.js 13+

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
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
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Dashboard", "About", "Info", "Yashgpt", "Reports", "Series", "News", 'Chat'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} >
        Truth Watch
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link href={`/${item.toLowerCase()}`} key={item} passHref prefetch>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "initial" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Left: App Name */}
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", display: { xs: "block", sm: "block" }, color: 'black' }}
            >
              Truth Watch
            </Typography>

            {/* Center Nav - Hidden on XS */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navItems.map((item) => (
                <Link
                  href={`/${item.toLowerCase()}`}
                  key={item}
                  passHref
                  prefetch
                >
                  <Button
                    // onClick={()=>{router.push(`/${item.toLowerCase()}`)}}
                    key={item}
                    sx={{
                      color: "black",
                      fontWeight: 500,
                      textTransform: "capitalize",
                      "&:hover": { color: "#90caf9" },
                    }}
                  >
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Right: Avatar on all screens */}
            <Stack direction="row" alignItems="center" spacing={2}>
              {/* Hamburger on small screens */}
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              {/* Avatar (Right) */}
              <Link href="/profile">
                <Avatar
                  alt="Profile"
                  src="/profile.jpg"
                  sx={{ width: 40, height: 40, color: 'black' }}
                />
              </Link>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile Nav */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
          color: "black"
        }}

      >
        {drawer}
      </Drawer>
    </>
  );
}
