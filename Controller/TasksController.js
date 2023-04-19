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
            const tasks = await TasksServices.getAll();
            res.json(new TasksDto(tasks));
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

    async updateTasks(req, res, next) {
        try {
            const tasksId = req.params.id || {};
            const tasksData = req.body || {};
            const tasks = await tasksServices.update(tasksId, tasksData);
            res.json(new EmplDto(tasks));
        } catch (e) {
            next(e);
        }
    }

    async deleteTasks(req, res, next) {
        try {
            const tasksId = req.params.id || {};
            await tasksServices.delete(tasksId);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

    async getTasksEmpl(req, res, next) {
        try {
            const tasksId = req.params.id || {};
            const empl = await TasksServices.getTasksTasks({ tasksId });
            res.json(new EmplDto(empl));
        } catch (e) {
            next(e);
        }
    }

    async getTasksProcesitem(req, res, next) {
        try {
            const tasksId = req.params.id || {};
            const procesitem = await TasksServices.getTasksTasks({ tasksId });
            res.json(new ProcesitemDto(procesitem));
        } catch (e) {
            next(e);
        }
    }
    
    async getTasks(req, res) {
        try {
            const query = req.query;
            console.log(query);
            const result = res.status(200).json(await TasksServices.getTasks(query))
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
        }
    }
}
module.exports = new TasksController()

