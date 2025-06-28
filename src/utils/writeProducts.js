import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (updatedProducts) => {
  try {
    const newProduct = await fs.writeFile(PATH_DB, updatedProducts, 'utf-8');
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};
