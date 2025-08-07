import { Router } from "express";
import bodyParser from "body-parser";
import recipControler from "../controlers/recipControler.js";


const routerRecip=Router()
routerRecip.use(bodyParser.json())
routerRecip.get("/getAll",recipControler.GetAll)
routerRecip.get("/getById/:_id",recipControler.GetBy_Id)
routerRecip.post("/add",recipControler.Add)
routerRecip.put("/update/:_id",recipControler.Update)
routerRecip.delete("/delete/:_id/:pass",recipControler.DeleteByPassOrManeger)

export default routerRecip
