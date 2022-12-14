import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default () => {
  
  return (
    <>
        <Box py={5} bgcolor="primary.main" style={{color: '#eee'}}>
            <Container>
                <Grid container>
                    <Grid item>
                        Find Us<br/>
                        Pendidikan Street, Budaya Residence, Blok D-19 <br/>
                        Lampung - Indonesia <br/>
                        Telp. 0822 8182 7201
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box  py={3} bgcolor="primary.dark" style={{color: '#aaa'}}>
            <Container>
             &copy;  Copyright  2021 - Artestroke - All Rights reserved.
            </Container> 
        </Box>
    </>
  );
}