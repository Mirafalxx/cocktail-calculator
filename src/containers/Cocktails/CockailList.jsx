// import { Button } from '@mui/material'
import React,{useEffect} from 'react'
import CocktailItem from './CocktailItem.jsx'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {fetchCocktailsRequest} from '../../store/actions/cocktailsActions';
import { useSelector } from 'react-redux';
import { Button,Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import {makeStyles} from '@mui/styles'


const useStyles=makeStyles({
    Progress: {
        position: 'absolute',
        top: '20%',
        left: '50%',
        marginTop: '-10px',
        marginLeft: '-10px',
      }
})

const CockailList = () => {
const dispatch=useDispatch();
const classes=useStyles();
const cocktailList=useSelector((state)=>state.cocktails.cocktailList)
const loadingCocktails=useSelector((state)=>state.cocktails.cocktailsLoading);
    useEffect(()=>{
        dispatch(fetchCocktailsRequest())
    },[dispatch])
    return (
        <>
        {loadingCocktails?<CircularProgress size={100} className={classes.Progress} />:
         <Grid container direction='column' spacing={2}>
             <Grid item container justify='space-between' alignItems='center'>
               <Grid item>
                   <Button color='primary' component={Link} to='/add-cocktails'>Add Cocktail</Button>
               </Grid>
           </Grid>
   <Grid item container spacing={1}>
         {cocktailList.map((cocktail)=>(
             <CocktailItem key={cocktail.id} id={cocktail.id} title={cocktail.title}  ingredients={cocktail.ingredients} recipe={cocktail.recipe}/>
         ))}
   </Grid>
   </Grid>
   }
       
        </>
    )
}

export default CockailList
