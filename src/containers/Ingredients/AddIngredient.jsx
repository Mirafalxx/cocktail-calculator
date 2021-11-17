import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormElement from '../../components/UI/FormElement'
import axiosRequest from '../../axiosRequest';

const AddIngredient = () => {

    const [state,setState]=useState({
        ingredient:'',
    })

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
    
        setState({...state,[name]:value})
      };

const createIngredient= async (e)=>{
    e.preventDefault();
    try{
        await axiosRequest.post('/ingredients.json',state);
    }
    catch (e){
        console.error(e);
    }
    finally {
        setState({ingredient:''});
    }
}

    return (
        <Grid container spacing={2} direction='column' component='form' onSubmit={createIngredient}>
            <Typography variant='h3'>Add New Ingredient</Typography>
            <Grid item>
                <FormElement required label='Ingredient' name='ingredient' value={state.ingredient} onChange={inputChangeHandler}/>
            </Grid>
            <Grid item xs>
                <Button type='submit' variant='contained' color='primary'>Add Ingredient</Button>
            </Grid>
        </Grid>
    )
}

export default AddIngredient
