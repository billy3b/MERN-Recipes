import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useGetUserID} from '../components/hooks/useGetUserID.js';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const CreateRecipe = () => {

  const userID= useGetUserID();
  
  const [recipe, setRecipe]= useState({
    name:"",
    ingredients:[],
    instructions:"",
    imageurl:"",
    cookingTime:0,
    userOwner:userID,
  })
  

  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;
    setRecipe({...recipe, [name]:value})
  }

  const handleIngredientChange = (event,index) => {
    const {value} = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({...recipe,ingredients})
    
  }

  const addIngredient =() => {
    setRecipe({...recipe, ingredients: [...recipe.ingredients,""] })
  }

  const onSubmit = async() => {
    try{ 
      await axios.post("http://localhost:3001/recipes", {...recipe});
      
      navigate("/");
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <h2>Create Recipes</h2>
      <article className=" mw5 ba b--black-20 mv4 shadow-5 dib ma4 ">
      <main className="pa4 black-80">
      <form>
        <label className="db fw6 lh-copy f6" htmlFor='name'>Name</label>
        <input 
        className="ma2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type='text' 
        id = 'name' 
        name='name' 
        value={recipe.name}
        onChange={handleChange}
        />
        <label className=" db fw6 lh-copy f6" htmlFor='ingredients'>Ingredients</label>
        {recipe.ingredients.map((ingredient,idx)=>(
          <input 
          className="ma2 pa2 input-reset ba  bg-transparent hover-bg-black hover-white w-100"
          key={idx}
          type='text'
          name='ingredients'
          value={ingredient} 
          onChange={(event)=>handleIngredientChange(event,idx)} />
        ))}
        <button 
        className=" ma2 bw1 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        onClick={addIngredient} 
        type='button'
        >
          Add Ingredients
        </button>
        <label  className="db fw6 lh-copy f6" htmlFor='instructions'>instructions</label>
        <input 
        className="ma2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type='textarea' 
        id = 'instructions' 
        name='instructions' 
        value={recipe.instructions}
        onChange={handleChange}
        />
        <label className="db fw6 lh-copy f6" htmlFor='imageurl'>Imageurl</label>
        <input 
        className="ma2 pa2 input-reset ba  bg-transparent hover-bg-black hover-white w-100"
        type='text' 
        id = 'imageurl' 
        name='imageurl' 
        value={recipe.imageurl}
        onChange={handleChange} />
        <label className="db fw6 lh-copy f6" htmlFor='cookingTime'>cookingTime(minutes)</label>
        <input 
        className="ma2 pa2 input-reset ba  bg-transparent hover-bg-black hover-white w-100"
        type='text' 
        id = 'cookingTime' 
        name='cookingTime' 
        value={recipe.cookingTime}
        onChange={handleChange} />

        <button 
        className="ma2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type='submit'
        onClick={onSubmit}
        >
          Create Recipe
        </button>
        
      </form>
      </main>
      </article>
    </div>
  )
}

export default CreateRecipe;