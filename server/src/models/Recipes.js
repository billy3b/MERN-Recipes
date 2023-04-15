import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema ({
    name: { type: String, required: true},
    ingredients: [{ type: String, required: true}],
    imageurl: {type:String},
    instructions: {type:String, required: true},
    cookingtime:{type:Number, required: true},
    userOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }
});

export const RecipesModel = mongoose.model("recipes",recipeSchema);