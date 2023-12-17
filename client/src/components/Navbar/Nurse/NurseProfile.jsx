import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { deepOrange, green,teal } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
   
const NurseProfile = () => {
    const NurseData = [
        {
            "Name":"Abc",
            "Id":"123",
            "Age":"25",
            "Department":"Medicine",
            "DOJ":"11/11/2023",
            "Rating":"5++",
            "Graduation_Information":"Bsc Nursing"
        }
    ]
  return (
    <div >
      <CssBaseline />
      <AppBar
        position="static"
        color="info"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap',textAlign:'center'}}>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1,fontFamily:'monospace' }} >
              Nurse Profile
            </Typography>
        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 5, pb: 6 }}>
       
        {NurseData.map((value) => (
        <Card>
              
              <CardHeader
                  title={<Typography align='left' fontFamily='monospace'>Med_Prep</Typography>}
                  avatar={ <Avatar sx={{ bgcolor:teal[500],width: 56, height: 56 }} variant="Rounded">
                  Ak
                 </Avatar>}
                  titleTypographyProps={{ align: 'center' }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[700],
                    fontFamily:'inherit',
                  }}
                ></CardHeader>
              <CardContent
              sx={{
                backgroundColor:'#01579b',
                fontFamily:'inherit',
                
              }}
              >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'baseline',
                      mb: 20,
                      flexDirection:'column'
                    }}
                  >
                    <ul >
                    <Typography component="h6" variant="h5" color='HighlightText' fontSize={30}>
                    ID :{value.Id}
                    </Typography>
                    <Typography component="h6" variant="h5" color='HighlightText' fontSize={30}>
                    Name : {value.Name}
                    </Typography>
                    <Typography component="h6" variant="h5" color='HighlightText' fontSize={30}>
                    Department : {value.Department}
                    </Typography>
                    <Typography component="h6" variant="h5" color='HighlightText' fontSize={30}>
                     Age : {value.Age}
                    </Typography>
                    <Typography component="h6" variant="h5" color='HighlightText' fontSize={30}>
                     DOJ : {value.DOJ}
                    </Typography>
                    <Typography component="h6" variant="h5" color='HighlightText' fontSize={30}>
                     Rating : {value.Rating}
                    </Typography>
                  </ul>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button >
                  </Button>
                </CardActions>
              </Card>))
        }
        </Container>
      <Copyright sx={{ mt: 5 }} />
    </div>
  )
}

export default NurseProfile
