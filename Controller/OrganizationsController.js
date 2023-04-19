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
    
    async getOrganizations(req, res) {
        try {
            const query = req.query;
            console.log(query);
            const result = res.status(200).json(await organizationsServices.getOrganizations(query))
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
        }
    }

   
}
module.exports = new OrganizationsController()

