import { Button, Card, CardActions, CardContent, CardHeader, Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { fetchSingleCocktailRequest } from '../../store/actions/cocktailsActions'
import CocktailItem from './CocktailItem';

const SingleCocktail = (props) => {
    const dispatch=useDispatch();
    const singleCocktail=useSelector(state=>state.cocktails.singleCocktail);
    const singleCocktailLoading=useSelector(state=>state.cocktails.singleCocktailLoading);
    useEffect(()=>{
        dispatch(fetchSingleCocktailRequest(props.match.params.id));
    },[dispatch],[props.match.params.id]);
    // console.log(singleCocktail.ingredients);

    return (
        <>
      {singleCocktailLoading?<div>...loading</div>:
      <Grid item xs sm md={6} lg={4}>
      <Card>
          <CardHeader title={`Название: ${singleCocktail.title}`}></CardHeader>
          <CardContent>
              <b>Ingredients</b>
              <ul>
                  {singleCocktail.ingredients?<div>da</div>:<div>ingredients loading</div>}
              </ul>
          </CardContent>
          <CardContent><b>recipe : </b> {singleCocktail.recipe}</CardContent>
          <CardActions>
          </CardActions>
      </Card>
  </Grid>
    }
       </>
    )
}

export default SingleCocktail
