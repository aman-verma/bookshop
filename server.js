const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data/db.json'));
const middlewares = jsonServer.defaults();

// Rewriter rules (optional, allows custom routes)
const rules = auth.rewriter({
  users: 640,
});

server.db = router.db;

server.use(middlewares);
server.use(rules); // Apply the rewrites
server.use(auth); // Apply the authentication middleware
server.use(router);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
