import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './Display.css';

const Display = ({enderecoDestino}) => {
    return (
        <Card className="__card-display-root searchArea">
        <CardContent>
            <Typography className="__card-display-title" color="textSecondary" gutterBottom>
                Destino
            </Typography>
            <Typography variant="h5" component="h2">
                {enderecoDestino}
            </Typography>
        </CardContent>
        <CardActions>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>
    </Card>
    )
}

export default Display;
