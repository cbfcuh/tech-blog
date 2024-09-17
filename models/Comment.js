const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

// Initialize the Comment model 
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",  
        key: "id",      
      },
    },
  },
  {
    sequelize,             
    timestamps: false,    
    freezeTableName: true, 
    underscored: true,     
    modelName: "comment",  
  }
);

module.exports = Comment;  