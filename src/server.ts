import bodyParser from "body-parser";
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(bodyParser.json());
server.use(middlewares);
server.use(router);

server.listen(5173, () => {
  console.log("JSON Server is running");
});

// npx json-server --watch src/db.json --port 5173
// http://localhost:5173/users
