// TODO: categoryResolver
import {Category} from '../../interfaces/Category';
import {Species} from '../../interfaces/Species';
import categoryModel from '../models/categoryModel';

export default {
  Species: {
    category: async (parent: Species) => {
      return await categoryModel.findById(parent.category);
    },
  },
  Mutation: {
    addCategory: async (_parent: undefined, args: Category) => {
      console.log(args);
      const category = new categoryModel(args);
      return await category.save();
    },
    modifyCategory: async (_parent: undefined, args: Category) => {
      const category = await categoryModel.findByIdAndUpdate(args.id, args, {
        new: true,
      });
    },
    deleteCategory: async (_parent: undefined, args: Category) => {
      return await categoryModel.findByIdAndDelete(args.id);
    },
  },
};
