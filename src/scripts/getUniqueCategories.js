import { readProducts } from '../utils/readProducts.js';

export const getUniqueCategories = async () => {
    try {
        const products = await readProducts();

        const categoriesSet = new Set(products.map((product) => product.category));

        const categories = Array.from(categoriesSet);

        console.log(categories);
    } catch (error) {
        console.log(error);
    }
};

getUniqueCategories();