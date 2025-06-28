import { readProducts } from '../utils/readProducts.js';

export const getTotalPrice = async (price) => {
  try {
    const products = await readProducts();

    const totalPrice = await products.reduce(
      (total, product) => total + Number(product.price),
      0,
    );

    console.log(totalPrice);
  } catch (error) {
    console.log(error);
  }
};

getTotalPrice();
