import Sequelize from "sequelize";

export default {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.INTEGER
  },
  height: {
    type: Sequelize.INTEGER
  },
  age: {
    type: Sequelize.INTEGER
  },
  gender: {
    type: Sequelize.STRING
  },
  register_date: {
    type: Sequelize.DATE
  },
  logo: {
    type: Sequelize.STRING
  },
  training_ids: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  user_type_id: {
    type: Sequelize.INTEGER
  },
  gym_ids: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
};