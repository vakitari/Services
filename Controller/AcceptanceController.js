const acceptanseServices = require('../services/AcceptanseServices.js')

class AcceptanceController {

    // вызов функции Добавления новой Приёмки в БД и вывод результата
    async add(req, res) {
        try {
            const result = await acceptanseServices.add(req.body)
            res.status(200).json(result)
        } catch (e) {
            res.status(400).json({ message: "Ошибка" })
            console.log(e);
        }


    }
    // вызов функции получения списка всех Приёмок и вывод результата

    async getAll(req, res) {
        try {
            return res.json(await acceptanseServices.getAll());
        } catch (e) {
            console.log(e);
        }
    }

    // Вызов функции получения списка всех найденных Приёмок из бд
    async search(req, res) {
        try {
            const query = {};
            query[req.params.param] = req.params.value;
            const result = await acceptanseServices.search(query)
            res.json(result)
        } catch (e) {
            console.log(e)
        }
    }

    // вызов функции Редактирования Приёмки и вывод результата
    async update(req, res) {
        try {
            if (!req.body._id) {
                res.status(400).json({ message: "id не указан" })
            }
            const result = await acceptanseServices.update(req.body)
            res.json(result)

        } catch (e) {
            console.log(e);
        }

    }
    // вызов функции удаления Приёмки из БД и вывод результата

    async delete(req, res) {

        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: "id не указан" })
            }
            const result = await acceptanseServices.delete(id)

            res.json(result)
        } catch (e) {
            console.log(e);
        }

    }
}
module.exports = new AcceptanceController()

