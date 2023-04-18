const productServices = require('../services/ProductServices.js')

class ProductController {

    async getProduct(req, res, next) {
        try {
            const product = await productServices.getAll();
            res.json(new ProductDto(product));
        } catch (e) {
            next(e);
        }
    }

    async searchById(req, res, next) {
        try {
            const productId = req.params.id || {};
            const product = await productServices.searchById({ productId });
            res.json(new ProductDto(product));
        } catch (e) {
            next(e);
        }
    }

    async getProductAccept(req, res, next) {
        try {
            const productId = req.params.id || {};
            const item = await productServices.getProductPosition({ productId });
            res.json(new ItemDto(item));
        } catch (e) {
            next(e);
        }
    }

    async getProductUser(req, res, next) {
        try {
            const productId = req.params.id || {};
            const user = await productServices.getProductPosition({ productId });
            res.json(new UserDto(user));
        } catch (e) {
            next(e);
        }
    }

    async getProductProcesItem(req, res, next) {
        try {
            const productId = req.params.id || {};
            const servaccept = await productServices.getProductPosition({ productId });
            res.json(new UserDto(servaccept));
        } catch (e) {
            next(e);
        }
    }

    async addProduct(req, res, next) {
        try {
            const productData = req.body || {};
            const product = await productServices.add(productData);
            res.json(new ProductDto(product));
        } catch (e) {
            next(e);
        }
    }

    async updateProduct(req, res, next) {
        try {
            const productId = req.params.id || {};
            const productData = req.body || {};
            const product = await productServices.update(productId, productData);
            res.json(new ProductDto(product));
        } catch (e) {
            next(e);
        }
    }

    async deleteProduct(req, res, next) {
        try {
            const productId = req.params.id || {};
            await productServices.delete(productId);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

    async findProductAndFilter(req, res, next) {
        try {
            const param = req.params.value1 || {};
            const param2 = req.params2.value2 || {};
            const param3 = req.params3.value3 || {};
            const product = await productServices.findProductAndFilter(param,param2,param3);
            res.json(new ProductDto(product));
        } catch (e) {
            next(e);
        }
    }
}
module.exports = new ProductController()

