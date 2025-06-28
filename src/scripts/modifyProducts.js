import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const modifyProducts = async () => {
  try {
    const products = await readProducts();

    const newProducts = await products.map(({ description, ...rest }) => rest);

    await writeProducts(JSON.stringify(newProducts));
  } catch (error) {
    console.log(error);
  }
};
modifyProducts();
