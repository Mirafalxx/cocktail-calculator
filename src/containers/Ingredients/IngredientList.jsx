import React,{useEffect} from 'react'
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import IngredientItem from './IngredientItem'
import { useDispatch, useSelector } from 'react-redux';
import {fetchIngredientsRequest} from '../../store/actions/ingredientsActions'
import axiosRequest from '../../axiosRequest.js';

const IngredientList = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchIngredientsRequest());
    },[dispatch])
    const ingredientsData=useSelector((state)=>state.ingredients.ingredients);
     console.log(ingredientsData);

     const testDelete=(id)=>{
         axiosRequest.delete(`ingredients/${id}.json`).then(res=>console.log(res));

     }
    return (
       <Grid container direction='column' spacing={2}>
           <Grid item container justify='space-between' alignItems='center'>
               <Grid item>
                   <Button color='primary' component={Link} to='/add-ingredients'>Add Ingredient</Button>
               </Grid>
           </Grid>
           <Grid item container spacing={1}>
              {ingredientsData.map((ing)=>{
                  return <IngredientItem key={ing.id} id={ing.id} ingredient={ing.ingredient} onDelete={()=>testDelete(ing.id)}/>
              })}
           </Grid>
       </Grid>
    )
}

export default IngredientList
