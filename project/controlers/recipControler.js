import recipeModel from "../models/recipeModel.js"
import userModel from "../models/userModel.js"
const recipControler = {
    GetAll: (req, res) => {
        try {
            recipeModel.find()
                .then(data => {
                    res.status(200).json(data)

                })
                .catch(err => {
                    res.status(500).send(err)
                })
        }
        catch {
            res.status(404).send("the recip's list not found! ")
        }
    },
    GetBy_Id: (req, res) => {
        try {
            recipeModel.findById(req.params._id)
                .then(data => {
                    res.status(200).json(data)

                })
                .catch(err => {
                    res.status(500).send(err)
                })
        }
        catch {
            res.status(404).send("the recip dosent found! ")
        }
    },

    // DeleteByPassOrManeger: (req, res) => {
    //     try {
    //         let recip = recipeModel.findById(req.params._id)
    //             .then(data => {
    //                 if (!recip)
    //                     res.status(500).send("Recip not found")

    //                 let user = recipeModel.find(x => x.pass== recip.idUser)
    //                     .then(data => {
    //                        if (!recipe) {
    //                return res.status(404).send("Recipe not found");
    //            }



    //                         if (user._id == recip.idUser || user.isManager == true) {
    //                             recip.findByIdAndDelete(req.params._id)
    //                                 .then(del => {
    //                                     return res.status(200).send(true)
    //                                 })
    //                                 .catce(err => {
    //                                     return res.status(500).send(false)
    //                                 })

    //                         }
    //                         else
    //                         res.status(404).send("your password worng!")
    //                     })
    //                     .catch(err => {
    //                         res.status(500).send("User not found!")
    //                     })

    //             })
    //             .catch(err => {
    //                 res.status(500).send("recip not found!")
    //             })
    //     }
    //     catch {
    //         res.status(404).send("deleteion faild!")
    //     }
    // },
    DeleteByPassOrManeger: (req, res) => {
        const recipeId = req.params._id;
        const userPassword = req.body.pass; 

       
        recipeModel.findById(recipeId)
            .then(recipe => {
                if (!recipe) {
                    return res.status(404).send("Recipe not found");
                }

                return userModel.findOne({ _id: recipe.idUser })
                    .then(user => {
                        if (!user) {
                            return res.status(404).send("User not found!");
                        }


                        if (user._id.toString() === userPassword || user.isManager) {

                            return recipeModel.findByIdAndDelete(recipeId)
                                .then(() => res.status(200).send("Recipe deleted successfully"))
                                .catch(err => res.status(500).send("Error deleting recipe: " + err.message));
                        } else {
                            return res.status(403).send("You do not have permission to delete this recipe");
                        }
                    });
            })
            .catch(err => {
                res.status(500).send("Error finding recipe: " + err.message);
            });
    },
    // Add: (req, res) => {
    //     try {

    //         const r = new recipeModel(req.body)
    //         r.save()
    //             .then(data => {
    //                 res.status(200).send(true)
    //             })
    //             .catch(err => {
    //                 res.status(500).send({ error: "הוספת מתכון נכשלה: " + err.message });
    //             })
    //     }
    //     catch {
    //         res.status(404).send("addetion faild")
    //     }
    // },
    Add: async (req, res) => {

        try {
        
        const recipe = new recipeModel(req.body);
        
        const savedRecipe = await recipe.save();
        
        res.status(200).send({ message: "Recipe added successfully", recipe: savedRecipe });
        
        } catch (err) {
        
        console.error(err);
        
        res.status(500).send({ error: "Failed to add recipe: " + err.message });
        
        }
        
        },

    Update: (req, res) => {
        try {
            recipeModel.findByIdAndUpdate(req.params.idUser, req.body, { new: true })
                .then(data => {
                    res.status(200).send(true)
                })
                .catch(err => {
                    res.status(500).send(false)
                })
        }
        catch {
            res.status(404).send("Updation faild!")
        }
    }

}
export default recipControler