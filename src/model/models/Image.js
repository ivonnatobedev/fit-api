import Sequelize from "sequelize";

export default {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  },
}