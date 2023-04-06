const organizationsServices = require('../services/OrganizationsServices.js')

class OrganizationsController {

         // вызов функции добавленя новой организации пользователей в БД и вывод результата
     async add(req, res) {
        try {
            const result = await organizationsServices.add(req.body)
            res.status(200).json(result)
        } catch (e) {
            res.status(400).json({ message: "Ошибка" })
            console.log(e);
        }


    }

       // вызов функции получения списка всех данных организации пользователей и вывод результата
    async getAll(req, res) {
        try {
            return res.json(await organizationsServices.getAll());
        } catch (e) {
            console.log(e);
        }
    }

    // Вызов функции получения списка всех найденных организаций из бд
    async search(req, res) {
        try {
            const query = {};
            query[req.params.param] = req.params.value;
            const result = await organizationsServices.search(query)
            res.json(result)
        } catch (e) {
            console.log(e)
        }
    }

       // вызов функции редактирование организации пользователей и вывод результата
    async update(req, res) {
        try {
            if (!req.body._id) {
                res.status(400).json({ message: "id не указан" })
            }
            const result = await organizationsServices.update(req.body)
            res.json(result)

        } catch (e) {
            console.log(e);
        }

    }

      // вызов функции удаления организации пользователей из БД и вывод результата
    async delete(req, res) {

        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: "id не указан" })
            }
            const result = await organizationsServices.delete(id)

            res.json(result)
        } catch (e) {
            console.log(e);
        }

    }
}
module.exports = new OrganizationsController()

