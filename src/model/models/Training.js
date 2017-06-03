import Sequelize from "sequelize";

export default {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  training_type_name: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE
  },
  duration: {
    type: Sequelize.STRING
  },
  current_duration: {
    type: Sequelize.STRING
  },
  exercises: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  description: {
    type: Sequelize.STRING
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