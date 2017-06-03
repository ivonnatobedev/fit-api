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
  description: {
    type: Sequelize.STRING
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  address: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
}