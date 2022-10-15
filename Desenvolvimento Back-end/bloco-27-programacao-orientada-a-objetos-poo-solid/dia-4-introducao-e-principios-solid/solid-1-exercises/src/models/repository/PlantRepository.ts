import { getPlantById, readPlantFile, removePlantById, updatePlantById } from '../../utils/plant';
import { IPlant } from '../entities/IPlant';

export default class PlantRepository {
  public getAll = async (): Promise<IPlant[]> => {
    const plants = await readPlantFile();
    return plants as IPlant[];
  }

  public getById = async (id: string): Promise<IPlant[] | []> => {
    const plantById = await getPlantById(id);
    return plantById;
  }

  public removeById = async (id: string): Promise<void> => {
    await removePlantById(id);
  }

  public updateById = async (id: string, newPlantUpdated: IPlant): Promise<void> => {
    await updatePlantById(id, newPlantUpdated);
  }
}