// import { Button } from '@mui/material'
import React,{useEffect} from 'react'
import CocktailItem from './CocktailItem.jsx'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {fetchCocktailsRequest} from '../../store/actions/cocktailsActions';
import { useSelector } from 'react-redux';
import { Button, Container, Grid } from '@mui/material';

const CockailList = () => {
const dispatch=useDispatch();
const cocktailList=useSelector((state)=>state.cocktails.cocktailList)
    useEffect(()=>{
        dispatch(fetchCocktailsRequest())
    },[dispatch])
    return (
        <Grid container direction='column' spacing={2}>
              <Button color='primary' component={Link} to='add-cocktails'>Add Cocktail</Button>
        <Container spacing={1}>
              {cocktailList.map((cocktail)=>(
                  <CocktailItem key={cocktail.id} id={cocktail.id} title={cocktail.title}  ingredients={cocktail.ingredients} recipe={cocktail.recipe}/>
              ))}
        </Container>
        </Grid>
    )
}

export default CockailList
