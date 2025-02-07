// File: models/chatMember.js
import { DataTypes } from 'sequelize';

const ChatMemberModel = (sequelize) => {
  return sequelize.define('ChatMember', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    chat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'member'),
      defaultValue: 'member',
    },
    joined_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'ChatMembers',
    timestamps: false,
    indexes: [
      // Prevent duplicate members in the same chat
      {
        unique: true,
        fields: ['chat_id', 'user_id'],
      },
    ],
  });
};

export default ChatMemberModel;