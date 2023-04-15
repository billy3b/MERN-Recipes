import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useGetUserID } from "../components/hooks/useGetUserID";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchrecipe = async() => { 
    try{ 
       const response = await axios.get("http://localhost:3001/recipes");
       setRecipes(response.data);
       
    } catch(err){
      console.log(err);
    } 
  }

  const fetchSavedRecipes = async () => {
    try {
      
      const response = await axios.get(
        `http://localhost:3001/recipes/savedrecipes/ids/${userID}`
      );
      setSavedRecipes(response.data.savedRecipes);
      console.log(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };


  fetchrecipe();
  fetchSavedRecipes();
  }, []);
 
  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes && savedRecipes?.includes(id);
  

  return (
    <div>
        <ul className='ma2 ba flex items-center justify-center grow bg-white'>
          {recipes.map((recipe)=>(
            
              <li key={recipe._id}>
                {savedRecipes?.includes(recipe._id) && <h1>Already Saved</h1>}
              <div>
                <h2>Name: {recipe.name}</h2>
                <button className='pointer link dim lightest-blue bg-black' onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}>
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}</button>
              </div>
              <div>
                <p>Instructions: {recipe.instructions}</p>
              </div>
              <div>
                <img src={recipe.imageurl} alt= {recipe.name} />
                <p>Cooking Time:{recipe.cookingTime}</p>
              </div>
              </li>
            
          ))}
        </ul>
      
    </div>
  )
}

export default Home;
