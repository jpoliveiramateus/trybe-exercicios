import fs from 'fs/promises';
import { join } from 'path';
import { IPlant } from '../models/entities/IPlant';

const readPlantFile = async (): Promise<IPlant[] | void> => {
  const path = '../../plantsData.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (_error) {
    return console.error('Erro ao ler arquivo');
  }
};

const writePlantFile = async (content: IPlant[]) => {
  const path = '../../plantsData.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    return console.error('Erro ao ler arquivo');
  }
};

const getPlantById = async (id: string): Promise<IPlant[] | []> => {
  const plants = await readPlantFile() as IPlant[];
  const plantById = plants.filter((plant) => plant.id === id);
  return plantById;
};

const removePlantById = async (id: string): Promise<void> => {
  const plants = await readPlantFile() as IPlant[];
  const newPlantList = plants.filter((plant) => plant.id !== id);

  await writePlantFile(newPlantList);
};

const updatePlantById = async (id: string, newPlantUpdated: IPlant): Promise<void> => {
  const plants = await readPlantFile() as IPlant[];

  const newListPlants = plants.map((plant) => {
    if (plant.id === id) {
      return newPlantUpdated;
    }

    return plant;
  });

  await writePlantFile(newListPlants);
};

export { readPlantFile, getPlantById, removePlantById, updatePlantById };