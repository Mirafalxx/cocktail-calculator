import { Button, FormControl, Grid, Select,MenuItem,InputLabel,Box } from '@mui/material'
import FormElement from '../../components/UI/FormElement'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchIngredientsRequest } from '../../store/actions/ingredientsActions';
import axiosRequest from '../../axiosRequest';
import history from '../../history';

const AddCocktail = () => {
    const dispatch=useDispatch();
    const [state,setState]=useState({
        title:'',
        recipe:'',
        ingredients:[{ingredient:'',grammage:''}],
    });
      const ingState=useSelector(state=>state.ingredients.ingredients);
          useEffect(()=>{
            
              dispatch(fetchIngredientsRequest());
            },[dispatch]);
            
            
            
            const inputChangeHandler=(e)=>{
              const {name,value}=e.target;
              setState((prev)=>({...prev,[name]:value}));
            };
            
            const changeIngredient = (i, name, value) => {
              setState((prev) => {
                const ingCopy = {
                  ...prev.ingredients[i],
                  [name]: value,
                };
                
                const a = prev.ingredients.map((ing, index) => {
                  if (index === i) {
                    return ingCopy;
                  }
                  return ing;
          });
          
          return { ...prev, ingredients: a };
        });
      };
    
      const addIngredient = () => {
        setState((prev) => {
          const ingredients = [...prev.ingredients];
          const newIngredients = [...ingredients, { ingredient: '', grammage: '' }];
          return { ...prev, ingredients: newIngredients };
        });
      };
    
      const deleteIngredient = (index) => {
        setState((prev) => {
          const ingredients = [...prev.ingredients];
    
          ingredients.splice(index, 1);
    
          return { ...prev, ingredients };
        });
      };
      const createCocktails=async(e)=>{
        e.preventDefault();
        try{
          await axiosRequest.post('/cocktails.json',state);
        }
        catch (e) {console.error(e);}
        finally{
          history.push('/');
        }
      }
      console.log(state)
    return (
      
            <form noValidate onSubmit={createCocktails}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                    <FormElement required label='title' name='title' onChange={inputChangeHandler}/>
                    </Grid>
                    <Grid item>

                    {state.ingredients.map((ing,i)=>(
                        <Grid container item key={i} spacing={2}>
                        <FormControl  sx={{ m: 2.5, minWidth: 250 }}>
        <InputLabel>Ingredient</InputLabel>
        <Select
          value={state.ingredients.title}
          name="ingredients"
          onChange={(e)=>changeIngredient(i,'ingredient',e.target.value)} >
          {ingState.map((ingr)=>(
          <MenuItem key={ingr.id} value={ingr.ingredient}>{ingr.ingredient}</MenuItem>
          ))}
        </Select>
      </FormControl>
                        <FormElement label='grammage' onChange={(e)=>changeIngredient(i,'grammage',e.target.value)}/>
                        <Button onClick={()=>deleteIngredient(i)}>X</Button>
                    </Grid>
                    ))}
                    <Button variant='outlined' style={{margin:"20px 0"}} onClick={addIngredient}>Add Ingredient</Button>
                    </Grid>
                    <Grid item>
                    <FormElement multiline rows={3} label='recipe' name='recipe' onChange={inputChangeHandler}/>
                    </Grid>
                    <Grid item xs>
                        <Button type="submit" variant="contained" color="primary">
                        Add Cocktail
                        </Button>
                    </Grid>
                </Grid>
            </form>
            
    )
}

export default AddCocktail
