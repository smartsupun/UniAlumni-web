import React from 'react'
import { Container, Grid, Box, Link } from '@material-ui/core/';

const Footer = () => {
    return (
        <footer>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 3, sm: 10 }}
                bgcolor="text.secondary"
                color="white"
                marginTop="10px"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5} >
                        <Grid item xs={12} sm={4}>

                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link href="/" color="inherit" >
                                    COntact
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    COntact
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    COntact
                                </Link>
                            </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1}>Second</Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        COntact
                                </Link>
                                </Box><Box>
                                    <Link href="/" color="inherit">
                                        COntact
                                </Link>
                                </Box><Box>
                                    <Link href="/" color="inherit">
                                        COntact
                                </Link>
                                </Box>
                            </Grid>

                        </Grid>
                        
                        <Box textAlign="center" pt={{xs:5, sm:10}} pb={{xs:5, sm:0}}>
                            Developed By Supun Lakshan &copy; 2022 
                        </Box>
                    </Container>
            </Box>
        </footer>
    )
}

export default Footer
