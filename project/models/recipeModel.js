import mongoose from "mongoose";
import recipValidate from "../validators/recipValidate.js";
// import { type } from "os";
// import { ref } from "process";

const recipeModel = new mongoose.Schema({
    recipeName: {
        type: String,
        require: true
    },
    img:{
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    level: {
        type: String,
        require: true,
        validate: {
            validator: (level) => recipValidate.checkLevel(level)
        }
    },
    timeDuration: {
        type: String,
        require: true
    },
    kind: {
        type: String,
        require: true,
        validate: {
            validator: (type) => recipValidate.checkType(type)
        }
        
    },
   
    components: [
        {
            name: {
                type: String,
                require: true
            },
            amount: {
                type: Number,
                require: true
            }
        }],
    idUser: {
       type:String,//mongoose.Types.ObjectId,
        ref:"userControler"
    } 
    //{
    //         type:[{name:"",amount:0}],
    //          require: true
    // }
})
export default mongoose.model("recipControler", recipeModel)