import {Card, CardContent,CardActionArea, Typography} from '@mui/material';
import React from 'react'

const CocktailItem = ({title,ingredients}) => {
    return (
       <Card sx={{maxWidth:345}}>
           <CardActionArea>
               <CardContent>
                   <Typography variant='h5' component='div'>{title}</Typography>
               </CardContent>
           </CardActionArea>
       </Card>
    )
}

export default CocktailItem
