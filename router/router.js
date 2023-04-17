
const Router = require('express')
const TasksController = require('../Controller/TasksController.js')
const AcceptanceController = require('../Controller/AcceptanceController.js')
const AcceptanceServiceController = require('../Controller/AcceptanceServiceController.js')
const EmpoyeesController = require('../Controller/EmpoyeesController.js')
const OrganizationsController = require('../controller/OrganizationsController.js')
const ProductController = require('../controller/ProductController.js')
const ProcessController = require('../controller/ProcessController.js')


const router = new Router()

router.post("/аcceptance/add", AcceptanceController.add)
router.get("/аcceptance/all", AcceptanceController.getAll)
router.get('/аcceptance/search/:param/:value', AcceptanceController.search)
router.put("/аcceptance/update", AcceptanceController.update) 
router.delete("/аcceptance/delete/:id", AcceptanceController.delete)

router.post("/аcceptanceService/add", AcceptanceServiceController.add)
router.get("/аcceptanceService/all", AcceptanceServiceController.getAll)
router.get('/аcceptanceService/search/:param/:value', AcceptanceServiceController.search)
router.put("/аcceptanceService/update", AcceptanceServiceController.update) 
router.delete("/аcceptanceService/delete/:id", AcceptanceServiceController.delete)

router.post("/empoyees/add", EmpoyeesController.add)
router.get("/empoyees/all", EmpoyeesController.getAll)
router.get('/empoyees/search/:param/:value', EmpoyeesController.search)
router.put("/empoyees/update", EmpoyeesController.update) 
router.delete("/empoyees/delete/:id", EmpoyeesController.delete) 

router.post("organizations/add", OrganizationsController.add)
router.get("organizations/all", OrganizationsController.getAll)
router.get('organizations/search/:param/:value', OrganizationsController.search)
router.put("organizations/update", OrganizationsController.update)
router.delete("organizations/delete/:id", OrganizationsController.delete)

router.post("/product/add", ProductController.add)
router.get("/product/all", ProductController.getAll)
router.get('/product/search/:param/:value', ProductController.search)
router.put("/product/update", ProductController.update)
router.delete("/product/delete/:id", ProductController.delete)

router.post("/tasks/add", TasksController.add)
router.get("/tasks/all", TasksController.getAll)
router.get('/tasks/search/:param/:value', TasksController.search)
router.put("/tasks/update", TasksController.update) 
router.delete("/tasks/delete/:id", TasksController.delete)


router.post("/api/process/", ProcessController.add)
router.put("/api/process/", ProcessController.update)
router.get("/api/process/", ProcessController.getAll)
router.get("/api/process/:id", ProcessController.search)
router.delete("/api/process/:id", ProcessController.delete)
router.get('/api/process/:id/items', ProcessController.findItemsByProcessId)
router.get("/api/process/:id?param", ProcessController.search) 
 

/*
/api/process/
/api/process/:id	
/api/process/:id/items
/api/process/:id?param
*/ 

module.exports = router