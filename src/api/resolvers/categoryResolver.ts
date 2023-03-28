// TODO: categoryResolver

import {Species} from '../../interfaces/Species';
import categoryModel from '../models/categoryModel';

export default {
  Species: {
    category: async (parent: Species) => {
      return await categoryModel.findById(parent.category);
    },
  },
  Mutation: {
    addCategory: async (parent: any, args: any) => {
      console.log(args);
      const category = new categoryModel(args);
      return await category.save();
    },
  },
};
