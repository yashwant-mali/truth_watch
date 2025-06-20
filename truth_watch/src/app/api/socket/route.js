import { Server } from "socket.io";

let io;

export const GET = async (req) => {
    if (!io) {
        io = new Server(globalThis.server || req.socket.server, {
            path: "/api/socket",
        });

        io.on("connection", (socket) => {
            console.log("User connected");

            socket.on("send-message", (msg) => {
                socket.broadcast.emit("receive-message", msg);
            });

            socket.on("disconnect", () => {
                console.log("User disconnected");
            });
        });

        req.socket.server.io = io;
    }

    return new Response("Socket server ready", { status: 200 });
};
