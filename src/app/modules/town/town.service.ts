import { ITown } from './town.interface';
import { Town } from './town.models';

const createTown = async (adData: ITown) => {
  const newAd = new Town(adData);
  return await newAd.save();
};

const findTownById = async (adId: string) => {
  return await Town.findById(adId);
};

const getAllTown = async (query: Record<string, unknown> = {}) => {
  return await Town.find(query);
};

const updateTownById = async (adId: string, payload: Partial<ITown>) => {
  return await Town.findByIdAndUpdate(adId, payload, { new: true });
};

const deleteTownById = async (adId: string) => {
  return await Town.findByIdAndDelete(adId);
};

export const TownService = {
  createTown,
  findTownById,
  getAllTown,
  updateTownById,
  deleteTownById,
};
