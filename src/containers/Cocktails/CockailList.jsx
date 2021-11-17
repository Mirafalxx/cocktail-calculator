// import { Button } from '@mui/material'
import React,{useEffect} from 'react'
import CocktailItem from './CocktailItem.jsx'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {fetchCocktailsRequest} from '../../store/actions/cocktailsActions';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';

const CockailList = () => {
const dispatch=useDispatch();
const cocktailList=useSelector((state)=>state.cocktails.cocktailList)
    useEffect(()=>{
        dispatch(fetchCocktailsRequest())
    },[dispatch])
    return (
        <>
              <Link to='add-cocktails'>Add Cocktail</Link>
        <Container>
              {cocktailList.map((cocktail)=>(
                  <CocktailItem title={cocktail.title}/>
              ))}
        </Container>
        </>
    )
}

export default CockailList
