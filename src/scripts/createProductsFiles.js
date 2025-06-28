import { PATH_FILES_DIR } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const formatFileName = (productName) => {
    return (
        productName
            .toLowerCase()
            .replace(/[^a-z0-9 ]/gi, '')
            .trim()
            .replace(/\s+/g, '-') + '.json'
    );
};

export const createProductsFiles = async () => {
    try {
        const products = await readProducts();

        await fs.mkdir(PATH_FILES_DIR, { recursive: true });

        for (const product of products) {
            const fileName = formatFileName(product.name);
            const filePath = path.join(PATH_FILES_DIR, fileName);
            const productJSON = JSON.stringify(product, null, 2); // красиво форматовано
            await fs.writeFile(filePath, productJSON, 'utf-8');
        }
    } catch (error) {
        console.log(error);
    }
};

createProductsFiles();
