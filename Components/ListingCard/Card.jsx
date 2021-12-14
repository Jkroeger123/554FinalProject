import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Sofa from '../../public/images/sofa.jpg'
import Image from 'next/image'

function MediaCard({data}) {

    return (
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
              <CardMedia>
                  <Image layout="responsive" src={Sofa} alt={data.alt}/>
              </CardMedia>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  ${data.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {data.title}
                  </Typography>
                  <Typography variant="body3" sx={{color: '#A92C68'}}>
                  {data.school}
                  </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
      );
}
export default MediaCard