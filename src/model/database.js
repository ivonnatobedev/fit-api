import Sequelize from "sequelize";
import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_LOCATION
} from "../config/db";
import {
  UserModel,
  TrainingTypeModel,
  UserTypeModel,
  TrainingModel,
  ExerciseModel,
  ExerciseTypeModel,
  GymModel,
  ImageModel
} from "./models";


const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "sqlite",
  storage: DB_LOCATION
});

export const User = db.define('users', UserModel);
export const TrainingType = db.define('training_types', TrainingTypeModel);
export const UserType = db.define('user_type', UserTypeModel);
export const Training = db.define('trainig', TrainingModel);
export const Exercise  = db.define('exercises', ExerciseModel);
export const ExerciseType = db.define('exercise_type', ExerciseTypeModel);
export const Gym = db.define('gym', GymModel);
export const Image = db.define('images', ImageModel);

export const initDb = () => {
  return db.authenticate()
    .then(() => {
      return db.sync();
    })
    .catch(err => {
      console.error('Cannot connect to database:', err);
    });
};


