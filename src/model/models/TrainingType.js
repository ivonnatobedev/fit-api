import Sequelize from "sequelize";

export default {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  exercises: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  description: {
    type: Sequelize.STRING
  },
  duration: {
    type: Sequelize.STRING // HH/MM
  },
  image: {
    type: Sequelize.STRING
  },
  author_id: {
    type: Sequelize.INTEGER
  },
  stars: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
}