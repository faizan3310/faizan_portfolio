import axios from 'axios';
import { useEffect, useState } from 'react';
import utilDetails from './services';
import {Link} from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';


function EndUserPage() {

    const [photoDetails, setPhotoDetails] = useState([]);

    var apiUrl = utilDetails.getDomain() + utilDetails.apiUrl.getPhotoData;
    // apiUrl = http://localhost:8080/getPhotoDetails
    
    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            console.log(response);
            setPhotoDetails(response.data.photoDetails)
        }).catch((error) => {
            console.log(error);
        })   
    }, [apiUrl]);
    

    return(
        <>
            <photoDetailsContainer>

                <h2>Explore a wide range of Photos across different cateogories</h2>
                <div className='mainContent'>

                    <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        {   
                            photoDetails.map((data)=> (
                                // <ul>
                                //     <li>{data.title}</li>
                                // </ul>
                                <Card sx={{ maxWidth: 345, width: 300 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={data.url}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {data.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">
                                            <Link to={`/moreDetails/${data.photoId}`}>More Detail</Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            ))
                        }

                    </Grid>    
    
                </div>
           
            </photoDetailsContainer>

        </>
    )
}
export default EndUserPage;