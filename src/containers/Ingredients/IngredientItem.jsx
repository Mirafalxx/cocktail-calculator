import { Button, Card, CardActions, CardHeader, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'


const useStyles=makeStyles({
    card:{
        height:'100%'
    },
    media:{
        height:0,
        paddingTop:'56.25%',
    }
})

const IngredientItem = ({id,ingredient,onDelete}) => {
    const classes=useStyles();
    return (
        <Grid item xs sm md={6} lg={4}>
            <Card className={classes.card}>
                <CardHeader title={ingredient}/>
                <CardActions>
                    <Button variant='contained' color='secondary' component={Link} to={'/ingredients/'+id}>Edit</Button>
                </CardActions>
                <CardActions>
                    <Button variant='contained' color='error' onClick={onDelete}>Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default IngredientItem
