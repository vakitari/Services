const employeesServices = require('../services/EmpoyeesService.js')

class EmployeesController {
   

    async getEmployees(req, res, next) {
        try {
            const search = req.params.id || {};
            const employees = await employeesServices.searchById(search);
            res.json(new EmplDto(employees));
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const employees = await employeesServices.getAll();
            res.json(new EmplDto(employees));
        } catch (e) {
            next(e);
        }
    }

    async getEmployeesStorageff(req, res, next) {
        try {
            const employeesId = req.params.id || {};
            const storageff = await employeesServices.getEmployeesStorageff({ employeesId });
            res.json(new StorageffDto(storageff));
        } catch (e) {
            next(e);
        }
    }

    async getEmployeesPosition(req, res, next) {
        try {
            const employeesId = req.params.id || {};
            const position = await employeesServices.getEmployeesPosition({ employeesId });
            res.json(new PositionDto(position));
        } catch (e) {
            next(e);
        }
    }

    async getEmployeesTasks(req, res, next) {
        try {
            const employeesId = req.params.id || {};
            const tasks = await employeesServices.getEmployeesTasks({ employeesId });
            res.json(new TasksDto(tasks));
        } catch (e) {
            next(e);
        }
    }

    async addEmployees(req, res, next) {
        try {
            const employeesData = req.body || {};
            const accept = await employeesServices.add(employeesData);
            res.json(new EmplDto(accept));
        } catch (e) {
            next(e);
        }
    }

    async updateEmployees(req, res, next) {
        try {
            const employeesId = req.params.id || {};
            const employeesData = req.body || {};
            const employees = await employeesServices.update(employeesId, employeesData);
            res.json(new EmplDto(employees));
        } catch (e) {
            next(e);
        }
    }

    async deleteEmployees(req, res, next) {
        try {
            const employeesId = req.params.id || {};
            await employeesServices.delete(employeesId);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }
    
    async getEmpl(req, res) {
        try {
            const query = req.query;
            console.log(query);
            const result = res.status(200).json(await employeesServices.getEmpl(query))
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
        }
    }
}
module.exports = new EmployeesController()

