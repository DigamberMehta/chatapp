// File: models/index.js
import { Sequelize } from 'sequelize';
import UserModel from './user.js';
import ChatModel from './chat.js';
import ChatMemberModel from './chatMember.js';
import MessageModel from './message.js';

const sequelize = new Sequelize('chatapp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

// Test Connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (err) {
    console.error('Connection failed:', err);
  }
})();

// Initialize Models
const User = UserModel(sequelize);
const Chat = ChatModel(sequelize);
const ChatMember = ChatMemberModel(sequelize);
const Message = MessageModel(sequelize);

// Define Associations with Cascading
Chat.hasMany(Message, { 
  foreignKey: 'chat_id',
  onDelete: 'CASCADE', // Delete messages when chat is deleted
});
Message.belongsTo(Chat, { foreignKey: 'chat_id' });

User.hasMany(Message, { 
  foreignKey: 'sender_id',
  onDelete: 'CASCADE', // Delete messages when user is deleted
});
Message.belongsTo(User, { foreignKey: 'sender_id' });

Chat.belongsToMany(User, { 
  through: ChatMember,
  foreignKey: 'chat_id',
  otherKey: 'user_id',
  onDelete: 'CASCADE', // Remove members when chat is deleted
});
User.belongsToMany(Chat, { 
  through: ChatMember,
  foreignKey: 'user_id',
  otherKey: 'chat_id',
  onDelete: 'CASCADE', // Remove members when user is deleted
});

// Sync Database (optional)
// await sequelize.sync({ alter: true }); // Use in development only

export { sequelize, User, Chat, ChatMember, Message };
