import React, { useState } from 'react';
import { Button, Box, TextField, Typography, CssBaseline, Container, Paper, Grid, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const RestaurantEnroll: React.FC = () => {

    const [resType, setResType] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            restNm: data.get('restNm'),
            restAddr1: data.get('restAddr1'),
            restAddr2: data.get('restAddr2'),
            resType: resType,
        });
    };

    const handleChange = (event: { target: { value: any; }; }) => {
        const resType = event.target.value
        setResType(resType);
        console.log(resType)
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h5" align="center">
                        맛집 등록
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit}
                        sx={{
                            mt: 2,
                            ml: 2,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    name="restNm"
                                    required
                                    fullWidth
                                    id="restNm"
                                    label="맛집이름"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="restAddr1"
                                    required
                                    fullWidth
                                    id="restAddr1"
                                    label="주소"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="restAddr2"
                                    required
                                    fullWidth
                                    id="restAddr2"
                                    label="상세주소"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl sx={{ minWidth: 120 }}>
                                    <InputLabel>종류</InputLabel>
                                    <Select
                                        id="resType"
                                        value={resType}
                                        onChange={handleChange}
                                        fullWidth
                                        label="종류"
                                    >
                                        <MenuItem value={"한식"}>한식</MenuItem>
                                        <MenuItem value={"일식"}>일식</MenuItem>
                                        <MenuItem value={"중식"}>중식</MenuItem>
                                        <MenuItem value={"양식"}>양식</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    등록
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

export default RestaurantEnroll