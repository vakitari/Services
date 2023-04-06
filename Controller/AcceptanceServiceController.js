const acceptanseServicesService = require('../services/AcceptanseServicesServices.js')

class AcceptanceServiceController {

    // вызов функции Добавления новой услуги в БД и вывод результата
    async add(req, res) {
        try {
            const result = await acceptanseServicesService.add(req.body)
            res.status(200).json(result)
        } catch (e) {
            res.status(400).json({ message: "Ошибка" })
            console.log(e);
        }


    }
    // вызов функции получения списка всех услуг и вывод результата

    async getAll(req, res) {
        try {
            return res.json(await acceptanseServicesService.getAll());
        } catch (e) {
            console.log(e);
        }
    }

    // Вызов функции получения списка всех найденных товаров из бд
    async search(req, res) {
        try {
            const query = {};
            query[req.params.param] = req.params.value;
            const result = await acceptanseServicesService.search(query)
            res.json(result)
        } catch (e) {
            console.log(e)
        }
    }

    // вызов функции Редактирования услуги и вывод результата
    async update(req, res) {
        try {
            if (!req.body._id) {
                res.status(400).json({ message: "id не указан" })
            }
            const result = await acceptanseServicesService.update(req.body)
            res.json(result)

        } catch (e) {
            console.log(e);
        }

    }
    // вызов функции удаления услуги из БД и вывод результата

    async delete(req, res) {

        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: "id не указан" })
            }
            const result = await acceptanseServicesService.delete(id)

            res.json(result)
        } catch (e) {
            console.log(e);
        }

    }
}
module.exports = new AcceptanceServiceController()

