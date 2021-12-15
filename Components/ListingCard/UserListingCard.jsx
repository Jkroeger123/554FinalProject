import react , {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Sofa from '../../public/images/sofa.jpg'
import Image from 'next/image'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MediaCard({data}) {

    const [isActive, setIsActive] = useState(false)

    return (
        <Card sx={{ maxWidth: 200, position: 'relative' }}>

            <div onClick={() => setIsActive(f => !f)} style={{position: 'absolute', color: '#A92C68', top: '0%', right: '0%', zIndex: '100', marginRight: '16px', marginTop: '16px', cursor: 'pointer'}}>
                {isActive ? <AddCircleIcon /> : <RemoveCircleIcon />}
            </div>

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
                  {data.city}, {data.state}
                  </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
      );
}
export default MediaCard