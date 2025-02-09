// File: models/chat.js
import { DataTypes } from 'sequelize';

const ChatModel = (sequelize) => {
  return sequelize.define('Chat', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4, // Auto-generate UUID
    },
    is_group: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true, // Null for one-to-one chats
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true, // Null for one-to-one chats
    },
    last_message_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Track last message for sorting
    },
    group_avatar: {
      type: DataTypes.STRING,
      allowNull: true, // Group-specific field
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // Group description
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'Chats',
    timestamps: false,
    indexes: [
      {
        fields: ['is_group'], // Improve query performance
      },
    ],
  });
};

export default ChatModel;
