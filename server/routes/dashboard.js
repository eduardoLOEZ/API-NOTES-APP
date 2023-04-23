const express= require("express")
const router= express.Router()
const dashboardController= require("../controllers/dashboardController")
const { isLoggedIn }= require("../middleware/checkAuth")
// Middleware personalizado para verificar si el usuario está autenticado

// Rutas del dashboard
//middleware para que no usen el endpoint dashboard sin haber iniciado sesion
router.get("/dashboard", isLoggedIn, dashboardController.dashboard);

module.exports = router;



