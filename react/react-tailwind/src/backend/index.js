import express from "express";
const app = express();

// app.get()
// app.put()
// app.post()
// app.delete()
// app.listen()

app.get("/api/user", (req, res) => {
  res.json({ name: "john", age: 30 });
});

const Port = 3000 || process.env.Port;
app.listen(Port, () => {
  console.log(`Server is listening at ${Port}`);
});

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-Type": "text/plane" });
//     res.end("Node-js");
//   })
//   .listen(3000, () => {
//     console.log("Server is running on port : 3000");
//   });
