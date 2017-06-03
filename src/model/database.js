import Sequelize from "sequelize";
import {
  UserModel,
  TrainingTypeModel,
  UserTypeModel,
  TrainingModel,
  ExerciseModel,
  ExerciseTypeModel,
  GymModel,
  ImageModel,
  StarModel
} from "./models";


const db = new Sequelize("fitness_db", "root", "root", {
  host: "localhost",
  dialect: "sqlite",
  storage: "db.sqlite"
});

export const User = db.define('users', UserModel);
export const TrainingType = db.define('training_types', TrainingTypeModel);
export const UserType = db.define('user_type', UserTypeModel);
export const Training = db.define('trainig', TrainingModel);
export const Exercise  = db.define('exercises', ExerciseModel);
export const ExerciseType = db.define('exercise_type', ExerciseTypeModel);
export const Gym = db.define('gym', GymModel);
export const Image = db.define('images', ImageModel);
export const Star = db.define('stars', StarModel);

export const initDb = () => {
  db.authenticate()
    .then(() => {
      User.sync({force: true});
      TrainingType.sync({force: true});
      UserType.sync({force: true});
      Training.sync({force: true});
      Exercise.sync({force: true});
      ExerciseType.sync({force: true});
      Gym.sync({force: true});
      Image.sync({force: true});
      Star.sync({force: true});
    })
    .catch(err => {
      console.error('Cannot connect to database:', err);
    });
};


