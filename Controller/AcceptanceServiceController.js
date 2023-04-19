const acceptanseServicesService = require('../services/AcceptanseServicesServices.js')
const acceptanceServiceDto = require('../DTO/AcceptanceServiceDto.js')

class AcceptanceServiceController {

    async getAcceptanceService(req, res, next) {
        try {
            const acceptanseServices = await acceptanseServicesService.getAll();
            res.json(new acceptanceServiceDto(acceptanseServices));
        } catch (e) {
            next(e);
        }
    }

    async searchById(req, res, next) {
        try {
            const acceptanceServiceId = req.params.id || {};
            const acceptanseServices = await acceptanseServicesService.searchById({ acceptanceServiceId });
            res.json(new acceptanceServiceDto(acceptanseServices));
        } catch (e) {
            next(e);
        }
    }

    async getAcceptanceServiceAccept(req, res, next) {
        try {
            const acceptanceServiceId = req.params.id || {};
            const accept = await acceptanseServicesService.getAcceptanceServicePosition({ acceptanceServiceId });
            res.json(new ItemDto(accept));
        } catch (e) {
            next(e);
        }
    }

    async getAcceptanceServiceTasks(req, res, next) {
        try {
            const acceptanceServiceId = req.params.id || {};
            const tasks = await acceptanseServicesService.getAcceptanceServicePosition({ acceptanceServiceId });
            res.json(new UserDto(tasks));
        } catch (e) {
            next(e);
        }
    }

    async addAcceptanceService(req, res, next) {
        try {
            const AcceptanceServiceData = req.body || {};
            const acceptanseServices = await acceptanseServicesService.add(AcceptanceServiceData);
            res.json(new acceptanceServiceDto(acceptanseServices));
        } catch (e) {
            next(e);
        }
    }

    async updateAcceptanceService(req, res, next) {
        try {
            const acceptanceServiceId = req.params.id || {};
            const AcceptanceServiceData = req.body || {};
            const acceptanseServices = await acceptanseServicesService.update(acceptanceServiceId, AcceptanceServiceData);
            res.json(new acceptanceServiceDto(acceptanseServices));
        } catch (e) {
            next(e);
        }
    }

    async deleteAcceptanceService(req, res, next) {
        try {
            const acceptanceServiceId = req.params.id || {};
            await acceptanseServicesService.delete(acceptanceServiceId);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

    async getAcceptanceService(req, res) {
        try {
            const query = req.query;
            console.log(query);
            const result = res.status(200).json(await acceptanseServicesService.getAcceptanceService(query))
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
        }
    }
}
module.exports = new AcceptanceServiceController()

