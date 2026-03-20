import { createBareServer } from "@tomphttp/bare-server-node";
import { createServer } from "node:http";
import express from "express";

const app = express();
const bareServer = createBareServer("/bare/");

// Serve your static files (index.html, uv/ folder, etc.)
app.use(express.static("."));

// Handle all bare server requests
app.use((req, res, next) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    next();
  }
});

// For upgrades (WebSocket needed for some sites)
const httpServer = createServer(app);
httpServer.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

const port = process.env.PORT || 8080;
httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
