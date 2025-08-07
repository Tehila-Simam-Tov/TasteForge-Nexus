import mongoose from "mongoose";


const userModel =new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    address: {
        type: String,
        require:false
    },
    phone: {
        type: String,
        require:true
    },
    isManager: {
        type: Boolean,
        require:true
    },
    
    favoriteRecipes: {
        type: [String],
        required: false 
    }
})
export default mongoose.model("userControler",userModel)