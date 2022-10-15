import { IPlant } from '../models/entities/IPlant';
import PlantRepository from '../models/repository/PlantRepository';

export default class PlantService {
  constructor(private plantRepository = new PlantRepository()) {}

  public getAll = async (): Promise<IPlant[]> => {
    const plants = await this.plantRepository.getAll();

    return plants;
  }

  public getById = async (id: string): Promise<IPlant[] | []> => {
    const plantById = await this.plantRepository.getById(id);

    return plantById;
  }

  public removeById = async (id: string): Promise<void> => {
    await this.plantRepository.removeById(id);
  }

  public updateById = async (id: string, newPlantUpdated: IPlant): Promise<void> => {
    await this.plantRepository.updateById(id, newPlantUpdated);
  };
}