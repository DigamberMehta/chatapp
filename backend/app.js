import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import { sequelize } from "./models/index.js";
import availableUsersRoute from "./routes/availableUsers.js"; 

const app = express();
const PORT = 3000;

// Enable CORS Middleware
app.use(cors({
  origin: "http://localhost:5173", // Allow frontend
  credentials: true, // Allow cookies & authentication headers
}));

// Create HTTP server and attach Express to it
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:5173", credentials: true },
});

// Middleware setup
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Chat App is running!");
});

// Use available users route
app.use("/api/users", availableUsersRoute);

// Start WebSocket server
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_message", (data) => {
    console.log(`Message from ${data.sender}: ${data.text}`);
    
    // ✅ Fix: Prevent sender from receiving their own message
    socket.broadcast.emit("receive_message", { sender: data.sender, text: data.text });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Sync database and start the server
sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server running with API + WebSockets on http://localhost:${PORT}`);
  });
});
