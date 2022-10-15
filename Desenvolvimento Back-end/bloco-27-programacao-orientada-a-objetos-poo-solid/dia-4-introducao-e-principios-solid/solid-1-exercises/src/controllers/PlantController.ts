import { Request, Response } from 'express';
import PlantService from '../services/PlantService';

export default class PlantController {
  constructor(private plantService = new PlantService()) {}

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const plants = await this.plantService.getAll();

    res.status(200).json(plants);
  }

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const plantById = await this.plantService.getById(id);

    if (plantById.length === 0) {
      return res.status(404).json({ message: 'Not exists plant with this id' });
    }

    return res.status(200).json(plantById);
  }

  public removeById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const plantById = await this.plantService.getById(id);

    if (plantById.length === 0) {
      return res.status(404).json({ message: 'Not exists plant with this id' });
    }

    await this.plantService.removeById(id);

    return res.sendStatus(204);
  }

  public updateById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const plant = req.body;

    const plantById = await this.plantService.getById(id);

    if (plantById.length === 0) {
      return res.status(404).json({ message: 'Not exists plant with this id' });
    }

    await this.plantService.updateById(id, plant);

    const plantUpdatedById = await this.plantService.getById(id);

    return res.status(200).json(plantUpdatedById);
  }
}