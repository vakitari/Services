const empoyeesServices = require('../services/EmpoyeesService.js')

class EmpoyeesController {

    // вызов функции Добавления нового Сотрудника в БД и вывод результата
    async add(req, res) {
        try {
            const result = await empoyeesServices.add(req.body)
            res.status(200).json(result)
        } catch (e) {
            res.status(400).json({ message: "Ошибка" })
            console.log(e);
        }


    }
    // вызов функции получения списка всех Сотрудников и вывод результата

    async getAll(req, res) {
        try {
            return res.json(await empoyeesServices.getAll());
        } catch (e) {
            console.log(e);
        }
    }

    // Вызов функции получения списка всех найденных Сотрудников из бд
    async search(req, res) {
        try {
            const query = {};
            query[req.params.param] = req.params.value;
            const result = await empoyeesServices.search(query)
            res.json(result)
        } catch (e) {
            console.log(e)
        }
    }

    // вызов функции Редактирования Сотрудника и вывод результата
    async update(req, res) {
        try {
            if (!req.body._id) {
                res.status(400).json({ message: "id не указан" })
            }
            const result = await empoyeesServices.update(req.body)
            res.json(result)

        } catch (e) {
            console.log(e);
        }

    }
    // вызов функции удаления Сотрудника из БД и вывод результата

    async delete(req, res) {

        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: "id не указан" })
            }
            const result = await empoyeesServices.delete(id)

            res.json(result)
        } catch (e) {
            console.log(e);
        }

    }
}
module.exports = new EmpoyeesController()

