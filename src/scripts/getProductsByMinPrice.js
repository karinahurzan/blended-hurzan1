import { readProducts } from '../utils/readProducts.js';

export const getProductsByMinPrice = async (price) => {
  try {
    const products = await readProducts();

    const filteredProducts = await products.filter(
      (product) => Number(product.price) >= Number(price)
    );

    console.log(filteredProducts);
  } catch (error) {
    console.log(error);
  }
};

getProductsByMinPrice('420.29');
