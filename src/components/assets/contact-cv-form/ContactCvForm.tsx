import React from 'react'
import './ContactCvForm.scss';
import { Card, CardContent, Grid, TextField, Box, MenuItem, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DDC79F'
    },
    text: {
      primary: '#C4C4C4',
      secondary: '#DDC79F'
    }
  }
});

export const ContactCvForm = () => {

  const [job, setJob] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJob(event.target.value as string)
  }

  return <div className='contact-cv-form'>
    <div className='contact-cv--head'>
      <h3 className='contact-cv--header'>
        Przesłanie CV
      </h3>
    </div>
    <div className='contact-cv--body'>
      <span className='contact-cv--info'>
        Chcesz pracować razem z nami? Proszę uzupełnij swoje dane poniżej.
      </span>
      <ThemeProvider theme={theme}>
      <Card className='contact-cv--form' style={{border: "none", boxShadow: "none"}}>
        <CardContent className='contact-cv--form-content'>
          <form>
            <Grid  container spacing={3.5}>
              <Grid xs={12} sm={6} item borderColor="primary">
                <TextField label="Imię" placeholder='Wpisz swoje Imię'  fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label="Nazwisko" placeholder='Wpisz swoje Nazwisko' fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField type="number" label="Numer telefonu" placeholder='Wpisz swój numer telefonu' fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField type="email" label="Adres E-mail" placeholder='Wpisz swój adres e-mail' fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Box>
                  <TextField 
                  label="Stanowisko pracy" 
                  select placeholder='Wpisz swój adres e-mail' 
                  fullWidth 
                  required
                  value={job}
                  onChange={handleChange}
                  helperText='Proszę wybierz stanowisko pracy'>
                    <MenuItem value='1'>Pilarz</MenuItem>
                    <MenuItem value='2'>Malrz</MenuItem>
                    <MenuItem value='3'>Monter</MenuItem>
                  </TextField>
                </Box>
              </Grid>
              <Grid xs={12} sm={9} item>
                <TextField label="Dodatkowe informacje" multiline rows={4} placeholder='Jeśli chcesz Nam coś opowiedzieć o sobie napisz tutaj' fullWidth />
              </Grid>
              <Grid xs={12} sm={9} item>
                <TextField name="upload-photo" type="file" fullWidth required />
              </Grid>
              <Grid className='contact-cv--button-section' xs={12} item>
                <button className='contact-cv--button' type="submit">Wyślij CV</button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      </ThemeProvider>
    </div>
  </div>
}