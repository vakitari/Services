const organizationsServices = require('../services/OrganizationsServices.js')

class OrganizationsController {

    async getOrganizations(req, res, next) {
        try {
            const organizations = await organizationsServices.getAll();
            res.json(new OrganizationsDto(organizations));
        } catch (e) {
            next(e);
        }
    }

    async searchById(req, res, next) {
        try {
            const organizationsId = req.params.id || {};
            const organizations = await organizationsServices.searchById({ organizationsId });
            res.json(new OrganizationsDto(organizations));
        } catch (e) {
            next(e);
        }
    }

    async getOrganizationsUser(req, res, next) {
        try {
            const organizationsId = req.params.id || {};
            const user = await organizationsServices.getOrganizationsUser({ organizationsId });
            res.json(new UserDto(user));
        } catch (e) {
            next(e);
        }
    }

    async addOrganizations(req, res, next) {
        try {
            const organizationsData = req.body || {};
            const organizations = await organizationsServices.add(organizationsData);
            res.json(new OrganizationstDto(organizations));
        } catch (e) {
            next(e);
        }
    }

    async updateOrganizations(req, res, next) {
        try {
            const organizationsId = req.params.id || {};
            const organizationsData = req.body || {};
            const organizations = await organizationsServices.update(organizationsId, organizationsData);
            res.json(new OrganizationstDto(organizations));
        } catch (e) {
            next(e);
        }
    }

    async deleteOrganizations(req, res, next) {
        try {
            const organizationsId = req.params.id || {};
            await organizationsServices.delete(organizationsId);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }
    
    async findOrganizationsAndFilter(req, res, next) {
        try {
            const param = req.params.value1 || {};
            const param2 = req.params2.value2 || {};
            const param3 = req.params3.value3 || {};
            const organizations = await organizationsServices.findOrganizationsAndFilter(param,param2,param3);
            res.json(new OrganizationstDto(organizations));
        } catch (e) {
            next(e);
        }
    }

   
}
module.exports = new OrganizationsController()

