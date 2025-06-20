"use client";

import React from "react";
import { Box, Container, Grid, Typography, Link as MuiLink } from "@mui/material";
import { Rowing } from "@mui/icons-material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#1e1e2e",
                color: "white",
                mt: 1,
                pt: 1,
                pb: 0,
                position: "fixed",
                bottom: 0,
                right: 0,
                left: 0,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    {/* App Info */}
                    <Grid item xs={12} md={0}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Truth Watch
                        </Typography>
                        <Typography variant="body2">
                            Stay informed with trusted reports and analytics on topics that matter.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    {/* <Grid item xs={12} md={0}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Quick Links
                        </Typography>
                        <MuiLink href="/" color="inherit" underline="hover" display="block">
                            Home
                        </MuiLink>
                        <MuiLink href="/about" color="inherit" underline="hover" display="block">
                            About
                        </MuiLink>
                        <MuiLink href="/series" color="inherit" underline="hover" display="block">
                            Series
                        </MuiLink>
                        <MuiLink href="/contact" color="inherit" underline="hover" display="block">
                            Contact
                        </MuiLink>
                    </Grid> */}

                    {/* Contact */}
                    <Grid item xs={12} md={0} sx={{ display: "flex", }}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Contact Us
                        </Typography>
                        <Typography variant="body2">Email: support@truthwatch.com</Typography>
                        <Typography variant="body2">Phone: +91 8698922567</Typography>
                        <Typography variant="body2">Location: Pune, India</Typography>
                    </Grid>
                </Grid>

                {/* Footer Bottom */}
                <Box mt={1} textAlign="center">
                    <Typography variant="body2" color="gray">
                        ©
                        {/* {new Date().getFullYear()}  */}
                        Truth Watch. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
