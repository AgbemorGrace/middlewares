const router =  require("express").Router;
const {createuser,
deleteuser,
getuser,
getusers,
updateuser} = require("../controllers/users.conttroller");
const {pathMiddleware}= require ("../middlewares/pathMiddleware")

const userRouter = router();

userRouter.route("/").get(pathMiddleware, getusers).post(createuser);
userRouter.route("/:userId")
.get(getuser)
.patch(updateuser)
.delete(deleteuser);

module.exports =userRouter;
