const path = require('file:///C:/web2/index.html');
// ... other imports

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ... rest of server.js