import { createBareServer } from "@tomphttp/bare-server-node";
import { createServer } from "node:http";
import { publicPath } from "@tomphttp/bare-server-node/should-be-public"; // optional if you want bare's /bare/ manifest
import express from "express"; // easier for serving static + bare

const app = express();
const bareServer = createBareServer("/bare/"); // this creates the /bare/ endpoint

// Serve your static files (index.html, uv/ folder, etc.)
app.use(express.static(".")); // serves from root (adjust if files are in public/)

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
httpServer.on("listening", () => {
  console.log(`Server running on port ${port}`);
});

httpServer.listen(port);
