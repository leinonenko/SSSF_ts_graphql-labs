// TODO: speciesResolver
import speciesModel from '../models/speciesModel';

export default {
  Animal: {
    species: async (parent: any) => {
      console.log(parent);
      return speciesModel.findById(parent.species);
    },
  },
};
