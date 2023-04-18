
const Router = require('express')
const TasksController = require('../Controller/TasksController.js')
const AcceptanceController = require('../Controller/AcceptanceController.js')
const AcceptanceServiceController = require('../Controller/AcceptanceServiceController.js')
const EmployeesController = require('../Controller/EmpoyeesController.js')
const OrganizationsController = require('../controller/OrganizationsController.js')
const ProductController = require('../controller/ProductController.js')
const ProcessController = require('../controller/ProcessController.js')


const router = new Router()

router.post("/api/accept", AcceptanceController.addAcceptance)
router.get("/api/accept", AcceptanceController.getAcceptance)
router.get("/api/accept/:id", AcceptanceController.searchById)
router.delete("/api/accept/:id", AcceptanceController.deleteAcceptance)
router.put("/api/accept/:id", AcceptanceController.updateAcceptance)
router.get("/api/accept/user", AcceptanceController.getAcceptanceUser)
router.get("/api/accept/item", AcceptanceController.getAcceptanceItem)
router.get("/api/accept/servaccept", AcceptanceController.getAcceptanceServaccept)
router.get("/api/organiz?param=value1&param2=value2&param3=value3", AcceptanceController.findAcceptanceAndFilter)


router.post("/api/servaccept", AcceptanceServiceController.addAcceptanceService)
router.get("/api/servaccept", AcceptanceServiceController.getAcceptanceService)
router.get("/api/servaccept/:id", AcceptanceServiceController.searchById)
router.delete("/api/servaccept/:id", AcceptanceServiceController.deleteAcceptanceService)
router.put("/api/servaccept/:id", AcceptanceServiceController.updateAcceptanceService)
router.get("/api/servaccept/accept", AcceptanceServiceController.getAcceptanceServiceAccept)
router.get("/api/servaccept/tasks", AcceptanceServiceController.getAcceptanceServiceTasks)
router.get("/api/servaccept?param=value1", AcceptanceServiceController.findServacceptAndFilter)

router.post("/api/empl", EmployeesController.addEmployees)
router.get("/api/empl", EmployeesController.getAll)
router.get("/api/empl/:id", EmployeesController.getEmployees)
router.put("/api/empl/:id", EmployeesController.updateEmployees)
router.delete("/api/empl/:id", EmployeesController.deleteEmployees)
router.get("/api/empl/storageff", EmployeesController.getEmployeesStorageff)
router.get("/api/empl/position", EmployeesController.getEmployeesPosition)
router.get("/api/empl/tasks", EmployeesController.getEmployeesTasks)
router.get("/api/empl?param=value1", EmployeesController.findEmployeesAndFilter)

router.post("/api/organiz", OrganizationsController.addOrganizations)
router.get("/api/organiz", OrganizationsController.getOrganizations)
router.get("/api/organiz:id", OrganizationsController.searchById)
router.delete("/api/organiz:id", OrganizationsController.deleteOrganizations)
router.put("/api/organiz:id", OrganizationsController.updateOrganizations)
router.get("/api/organiz/user", OrganizationsController.getOrganizationsUser)
router.get("/api/organiz?param=value1&param2=value2&param3=value3", OrganizationsController.findOrganizationsAndFilter)


router.post("/api/item", ProductController.addProduct)
router.get("/api/item", ProductController.getProduct)
router.get("/api/item/:id", ProductController.searchById)
router.delete("/api/item/:id", ProductController.deleteProduct)
router.put("/api/item/:id", ProductController.updateProduct)
router.get("/api/item/user", ProductController.getProductUser)
router.get("/api/item/accept", ProductController.getProductAccept)
router.get("/api/item/procesitem", ProductController.getProductProcesItem)
router.get("api/organiz?param=value1&param2=value2&param3=value3", ProductController.findProductAndFilter)


router.get("/api/tasks", TasksController.getAll)
router.post("/api/tasks", TasksController.addtasks)
router.get("/api/tasks/:id", TasksController.findById)
router.put("/api/tasks/:id", TasksController.updatetasks)
router.delete("/api/tasks/:id", TasksController.deletetasks)
router.get("/api/tasks/empl", TasksController.getOrganizationsEmpl)
router.get("/api/tasks/procesitem", TasksController.getOrganizationsProcesitem)
router.get("/api/tasks?param=value1", TasksController.findtasksAndFilter)

router.post("/api/process/", ProcessController.add)
router.put("/api/process/", ProcessController.update)  
router.get("/api/process/", ProcessController.getAll)
router.get("/api/process/:id", ProcessController.search)
router.delete("/api/process/:id", ProcessController.delete)
router.get('/api/process/:id/items', ProcessController.findItemsByProcessId)
router.get("/api/process/:id?param", ProcessController.search) 



module.exports = router