import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readProducts = async () => {
  try {
    const productsFile = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(productsFile);
  } catch (error) {
    console.log(error);
  }
};
