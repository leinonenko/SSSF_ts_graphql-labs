import {Animal} from '../../interfaces/Animal';
import animalModel from '../models/animalModel';

export default {
  Query: {
    animals: async () => {
      return await animalModel.find();
    },
  },
  Mutation: {
    addAnimal: async (_parent: undefined, args: Animal) => {
      const animal = new animalModel(args);
      return await animal.save();
    },
    modifyAnimal: async (_parent: undefined, args: Animal) => {
      console.log(args);
      return await animalModel.findByIdAndUpdate(args.id, args, {
        new: true,
      });
    },
  },
};
