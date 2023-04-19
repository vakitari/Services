const acceptanseServices = require('../services/AcceptanseServices.js')

class AcceptanceController {

    
    async getAcceptance(req, res, next) {
        try {
            const acceptance = await acceptanseServices.getAll();
            res.json(new AcceptanceDto(acceptance));
        } catch (e) {
            next(e);
        }
    }

    async searchById(req, res, next) {
        try {
            const acceptanceId = req.params.id || {};
            const acceptance = await acceptanseServices.searchById({ acceptanceId });
            res.json(new AcceptanceDto(acceptance));
        } catch (e) {
            next(e);
        }
    }

    async getAcceptanceItem(req, res, next) {
        try {
            const acceptanceId = req.params.id || {};
            const item = await acceptanseServices.getAcceptancePosition({ acceptanceId });
            res.json(new ItemDto(item));
        } catch (e) {
            next(e);
        }
    }

    async getAcceptanceUser(req, res, next) {
        try {
            const acceptanceId = req.params.id || {};
            const user = await acceptanseServices.getAcceptancePosition({ acceptanceId });
            res.json(new UserDto(user));
        } catch (e) {
            next(e);
        }
    }

    async getAcceptanceServaccept(req, res, next) {
        try {
            const acceptanceId = req.params.id || {};
            const servaccept = await acceptanseServices.getAcceptancePosition({ acceptanceId });
            res.json(new UserDto(servaccept));
        } catch (e) {
            next(e);
        }
    }

    async addAcceptance(req, res, next) {
        try {
            const acceptanceData = req.body || {};
            const acceptance = await acceptanseServices.add(acceptanceData);
            res.json(new AcceptanceDto(acceptance));
        } catch (e) {
            next(e);
        }
    }

    async updateAcceptance(req, res, next) {
        try {
            const acceptanceId = req.params.id || {};
            const acceptanceData = req.body || {};
            const acceptance = await acceptanseServices.update(acceptanceId, acceptanceData);
            res.json(new AcceptanceDto(acceptance));
        } catch (e) {
            next(e);
        }
    }

    async deleteAcceptance(req, res, next) {
        try {
            const acceptanceId = req.params.id || {};
            await acceptanseServices.delete(acceptanceId);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

    async getAcceptance(req, res) {
        try {
            const query = req.query;
            console.log(query);
            const result = res.status(200).json(await acceptanseServices.getAcceptance(query))
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
        }
    }
}
module.exports = new AcceptanceController()

