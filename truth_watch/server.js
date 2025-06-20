const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { Server } = require("socket.io");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    });

    const io = new Server(server, {
        path: "/api/socket",
    });

    io.on("connection", (socket) => {
        console.log("Socket connected");

        socket.on("send-message", (msg) => {
            socket.broadcast.emit("receive-message", msg);
        });

        socket.on("disconnect", () => {
            console.log("Socket disconnected");
        });
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
