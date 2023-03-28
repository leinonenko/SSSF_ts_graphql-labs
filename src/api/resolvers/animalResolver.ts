import {Animal} from '../../interfaces/Animal';
import animalModel from '../models/animalModel';
import speciesModel from '../models/speciesModel';
import categoryModel from '../models/categoryModel';

const animalData = [
  {
    id: '1',
    animal_name: 'Frank',
    species: '1',
  },
];

const speciesData = [
  {
    id: '1',
    species_name: 'Cat',
    category: '1',
  },
];

const categoryData = [
  {
    id: '1',
    category_name: 'Mammal',
  },
];

export default {
  Query: {
    animals: async (_parent: undefined, _args: Animal) => {
      return await animalModel.find();
    },
  },
};
