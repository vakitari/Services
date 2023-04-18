const tasksServices = require('../services/TasksService.js')

class TasksController {
    async findById(req, res, next) {
        try {
            const search = req.params.id || {};
            const tasks = await tasksServices.searchById(search);
            res.json(new EmplDto(tasks));
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const tasks = await organizationsServices.getAll();
            res.json(new OrganizationsDto(tasks));
        } catch (e) {
            next(e);
        }
    }

    async addtasks(req, res, next) {
        try {
            const tasksData = req.body || {};
            const tasks = await tasksServices.add(tasksData);
            res.json(new EmplDto(tasks));
        } catch (e) {
            next(e);
        }
    }

    async updatetasks(req, res, next) {
        try {
            const tasksId = req.params.id || {};
            const tasksData = req.body || {};
            const tasks = await tasksServices.update(tasksId, tasksData);
            res.json(new EmplDto(tasks));
        } catch (e) {
            next(e);
        }
    }

    async deletetasks(req, res, next) {
        try {
            const tasksId = req.params.id || {};
            await tasksServices.delete(tasksId);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

    async getOrganizationsEmpl(req, res, next) {
        try {
            const tasksId = req.params.id || {};
            const empl = await organizationsServices.getOrganizationsTasks({ tasksId });
            res.json(new EmplDto(empl));
        } catch (e) {
            next(e);
        }
    }

    async getOrganizationsProcesitem(req, res, next) {
        try {
            const tasksId = req.params.id || {};
            const procesitem = await organizationsServices.getOrganizationsTasks({ tasksId });
            res.json(new ProcesitemDto(procesitem));
        } catch (e) {
            next(e);
        }
    }
    
    async findtasksAndFilter(req, res, next) {
        try {
            const position = req.params.value1 || {};
            const tasks = await tasksServices.findtasksAndFilter(position);
            res.json(new EmplDto(tasks));
        } catch (e) {
            next(e);
        }
    }
}
module.exports = new TasksController()

