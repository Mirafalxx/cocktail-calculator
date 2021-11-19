import { Card,  Grid,  TextField, ToggleButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import axiosRequest from '../../axiosRequest';
import { fetchSingleIngredientRequest } from '../../store/actions/ingredientsActions';


const useStyles=makeStyles({
    card:{
        height:'100%'
    },
    media:{
        height:0,
        paddingTop:'56.25%',
    }
})

const SingleIngredient = (props) => {
    const classes=useStyles();
    const [edit,setEdit]=useState(false);
    const dispatch=useDispatch();
    const ingName=useSelector((state)=>state.ingredients.singleIngredient.ingredient);   
    
    useEffect(()=>{
        dispatch(fetchSingleIngredientRequest(props.match.params.id))
    },[props.match.params.id,dispatch])
    return (
        <Grid item xs sm md={6} lg={4}>
            <Card className={classes.card}>
                <TextField  variant="outlined" disabled={!edit} value={ingName} />
                <ToggleButton value="check" selected={edit} onChange={() => { setEdit(!edit);}}>
                             Edit
                    </ToggleButton>

            </Card>
        </Grid>
    )
}

export default SingleIngredient
