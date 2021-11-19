import {Button, Card, CardActions, CardContent,CardHeader, Grid} from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const CocktailItem = ({title,ingredients,recipe,keyItem,id}) => {
    return (
        <Grid item xs sm md={6} lg={4}>
            <Card>
                <CardHeader title={title}></CardHeader>
                <CardContent>
                    <b>Ingredients</b>
                    <ul>
                    {ingredients.map((ing)=>(<li key={keyItem}>{ing.ingredient}</li>))}
                    </ul>
                </CardContent>
                <CardContent><b>recipe : </b> {recipe}</CardContent>
                <CardActions>
                    <Button component={Link} to={`/cocktail/${id}`}>  <ArrowForwardIcon /></Button>


                </CardActions>
            </Card>
        </Grid>
    )
}

export default CocktailItem
