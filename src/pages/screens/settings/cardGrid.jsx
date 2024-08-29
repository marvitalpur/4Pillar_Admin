import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function CardGrid({title, value}) {
  return (
    <Grid item xs={12} sm={4}>
    <Card style={{ height: '15vh', marginTop: "40px"}}>
      <CardContent>
        <Typography variant="h6" sx={{color: "#bfbfbf", fontSize: "1.3rem", fontFamily: "Now", marginBottom: "5px"}} >{title}</Typography>
        <hr />
        <Typography variant="body2" sx={{color: "#000", fontFamily: "Avenir", fontWeight: "900", fontSize: "2.0rem", marginTop: "15px"}}>
          {value}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  )
}

export default CardGrid