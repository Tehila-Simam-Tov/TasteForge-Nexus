import bodyParser from "body-parser";
import { Router } from "express";
import userControler from "../controlers/userControler.js";
import recipMiddleware from "../middlewares/userMiddleware.js";

const routerUser=Router()
routerUser.use(bodyParser.json())
routerUser.get("/getAll",userControler.GetAll)
routerUser.get("/GetByNameAndPass/:name/:password", userControler.GetByNameAndPass);
//routerUser.get("/getByName&Id/:nameUser/:passUser",userControler.GetByNameAndPass)
routerUser.put("/addToLoveRecips/:id", userControler.AddToLoveRecips);
routerUser.post("/updateLoveRecips/:id",userControler.UpdateLoveRecips)
routerUser.get("/getLoveRecips/:id",userControler.GetNameLoveRecips)
routerUser.post("/add",recipMiddleware.printToFile,userControler.Add)
// routerUser.delete("deleteFromLoveRecips/:id", userControler.DeleteFromLoveRecips);
routerUser.delete("/deleteFromLoveRecips/:id", userControler.DeleteFromLoveRecips);
export default routerUser