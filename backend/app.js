import express from 'express';
import { sequelize, User } from './models/index.js';  // Make sure User model is imported

const app = express();
const PORT = 3000;

// Middleware setup
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Chat App is running!');
});




// Sync database and start server
sequelize.sync({ force: false }).then(async () => {
  console.log('Database synced successfully!');
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Database sync error:', err);
});
