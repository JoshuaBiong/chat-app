const {
    loginController,
    registerController,
    getAllUsersController,
    logOutController,

} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/allusers/:id", getAllUsersController);
router.get("/logout/:id", logOutController);

module.exports = router;