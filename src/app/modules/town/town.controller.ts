// src/controllers/ad.controller.ts

import { Request, Response } from 'express';
import { isErrorWithMessage } from '../../utils/Error';
import { TownService } from './town.service';

 const createTown = async (req: Request, res: Response) => {
  try {
    const ad = await TownService.createTown(req.body);
    res.status(201).json(ad);
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const getTownById = async (req: Request, res: Response) => {
  try {
    const ad = await TownService.findTownById(req.params.id);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.status(200).json(ad);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const getAllTown = async (req: Request, res: Response) => {
  try {
    const ads = await TownService.getAllTown(req.query);
    res.status(200).json(ads);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const updateTownById = async (req: Request, res: Response) => {
  try {
    const ad = await TownService.updateTownById(req.params.id, req.body);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.status(200).json(ad);
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const deleteTownById = async (req: Request, res: Response) => {
  try {
    const ad = await TownService.deleteTownById(req.params.id);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.status(204).json();
  }  catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};



export const TownController = {
   createTown,
   getAllTown,
   getTownById,
   updateTownById,
   deleteTownById
}