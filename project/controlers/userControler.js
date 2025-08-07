import mongoose from "mongoose"
import userModel from "../models/userModel.js"

let users = []
const userControler = {
    GetAll: (req, res) => {
        try {
            userModel.find()
                .then(data => {
                    res.status(200).json(data)
                })
                .catch(err => {
                    res.status(500).send(err)
                })

        }
        catch {
            res.status(404).send("The list was not found!")
        }
    },

    GetByNameAndPass: (req, res) => {
        try {
            const { name, password } = req.params

            userModel.findOne({ name, password })
                // userModel(u => u.name == name && u._id == _id)
                .then(data => {
                    // if (!data) {
                    //     return res.status(404).send("User not found!"); // User not found response
                    // }
                    res.status(200).json(data); // Respond with user data
                })
                .catch(err => {
                    res.status(404).send(err);
                });
        } catch (error) {
            res.status(500).send("An error occurred!");
        }
    },
    Add: (req, res) => {
        try {
            let newUser = new userModel(req.body)
            newUser.save()
                .then(data => {
                    res.status(200).send(true)
                })
                .catch(err => {
                    res.status(500).send(false)
                })
        }
        catch {
            res.status(404).send("Addation faield")
        }
    },
    AddToLoveRecips: (req, res) => {
        try {
            console.log("1")
            userModel.findById(req.params.id)
                .then(user => {
                    console.log("1")
                    if (!user) { 
                        console.log("2")
                        return res.status(404).send("User not found");
                        
                    }
                    console.log(user,req.body.recipe )
                    console.log("3")
                    user.favoriteRecipes.push(req.body.recipe);
                    console.log("4")
                    return user.save();
                })
                .then(() => {
                    res.status(200).send(true);
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).send("Error occurred while adding recipe");
                });
        }
        catch (error) {
            res.status(500).send("Error occurred while adding recipe");
        }
    }
    ,DeleteFromLoveRecips: (req, res) => {
        try {
            // Extracting recipe name directly from body since it is passed as a string
            const recipeName = req.body.recipe; 
            userModel.findById(req.params.id)
                .then(user => {
                    if (!user) {
                        return res.status(404).send("User not found");
                    }
                    console.log(user,req.body.recipe )
                    console.log("3")
                    // Filter the recipe from the user's favorites
                    user.favoriteRecipes = user.favoriteRecipes.filter(recipe => recipe !== recipeName);
                    return user.save();
                })
                .then(() => {
                    res.status(200).send(true);
                })
                .catch(err => {
                    console.error("Error occurred while deleting recipe:", err);
                    res.status(500).send("Error occurred while deleting recipe");
                });
        } catch (error) {
            console.error("Error in DeleteFromLoveRecips:", error);
            res.status(500).send("Error occurred while deleting recipe");
        }
    }
    ,
    UpdateLoveRecips: (req, res) => {
        try {

            userModel.findById(req.params.id)
                .then(user => {
                    if (!user) {
                        return res.status(404).send("User not found");
                    }
                    user.favoriteRecipes=req.body.recip;
                    return user.save();
                })
                .then(() => {
                    res.status(200).send(true);
                })
                .catch(err => {
                    res.status(500).send("Error occurred while adding recipe");
                });
        }
        catch (error) {
            res.status(500).send("Error occurred while adding recipe");
        }
    },
    // AddToLoveRecips: (req, res) => {
    //     const { idUser, oldRecipeName, newRecipeName } = req.body;
    //     debugger
    //     userModel.findById(idUser)
    //         .then(user => {
    //             if (user) {
    //                 // const currentLikes = user.arrFavoriteRecipe ? user.arrFavoriteRecipe.split(',') : [];
    //                 const currentLikes = user.arrFavoriteRecipe
    //                 const index = currentLikes.indexOf(oldRecipeName);
    //                 if (index !== -1) {
    //                     currentLikes[index] = newRecipeName;
    //                     user.arrFavoriteRecipe = currentLikes//.join(',');
    //                     return user.save();
    //                 } else {
    //                     res.status(404).send("Old recipe not found in favorites");
    //                 }
    //             } else {
    //                 res.status(404).send("User not found");
    //             }
    //         })
    //         .then(updatedUser => {
    //             res.status(200).json(updatedUser);
    //         })
    //         .catch(err => {
    //             res.status(500).send(err);
    //         });
    // },

    GetNameLoveRecips: (req, res) => {
        try {

            userModel.findById(req.params.id).select("favoriteRecipes")//x.favoriteRecipes
                .then(data => {
                    res.status(200).json(data.favoriteRecipes)
                })
                .catch(err => {
                    res.status(500).send(err)
                })
        }
        catch {
            res.status(404).send("no found!")
        }
    }


}
export default userControler