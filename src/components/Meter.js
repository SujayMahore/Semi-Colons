import * as React from 'react';
import './Meter.css';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOffIcon from '@mui/icons-material/LocationOff';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
 
...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
/*   color: theme.palette.text.secondary,
 */}));
 
export default function Meter({data}) {
  return (
    <Box className='BatchDetail' sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
          <Grid item xs={2} sm={4} md={4} >
            <Item><div className='Details'>
              <LocationOnIcon className='Icon'/>
              <span className='info'>Start: </span>
              </div>
              </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item><div className='Details'>
              <LocationOffIcon className='Icon'/>
              <span className='info'>End:</span>
              </div>
              </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item><div className='Details'>
              <ModeOfTravelIcon className='Icon'/>
              <span className='info'>Mode: </span>
              </div>
              </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item>
              <div className='Details'>
              <HourglassEmptyIcon className='Icon'/>
              <span className='info'>Days</span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item><div className='Details'>
              <DirectionsWalkIcon className='Icon'/>
              <span className='info'> Difficulty: </span>
              </div>
              </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item><div className='Details'>
              <TerrainIcon className='Icon'/>
              <span className='info'>Guided Tour</span>
              </div>
              </Item>
          </Grid>
 
      </Grid>
    </Box>
  );
}
 