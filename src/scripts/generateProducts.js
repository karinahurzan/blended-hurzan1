import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (number) => {
    try {
        const products = await readProducts();

        const newContacts = [];

        for (let i = 0; i < number; i++) {
            const product = createFakeProduct();
            newContacts.push(product);
        }

        const updatedProducts = [...products, ...newContacts];

        await writeProducts(JSON.stringify(updatedProducts));
    } catch (error) {
        console.log(error);
    }
};

generateProducts(5);