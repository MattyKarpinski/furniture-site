import React from 'react'
import './ContactCvForm.scss';
import { Typography, Card, CardContent, Grid, TextField, Button } from '@mui/material';

export const ContactCvForm = () => {

 
  

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
      <Card className='contact-cv--form'>
        <CardContent>
          <form>
            <Grid container spacing={3.5}>
              <Grid xs={12} sm={6} item>
                <TextField label="Imię" placeholder='Wpisz swoje Imię' fullWidth required />
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
                <TextField label="Stanowisko pracy" placeholder='Wpisz swój adres e-mail' fullWidth required />
              </Grid>
              <Grid xs={12} sm={9} item>
                <TextField label="Dodatkowe informacje" multiline rows={4} placeholder='Jeśli chcesz Nam coś opowiedzieć o sobie napisz tutaj' fullWidth />
              </Grid>
              <Grid xs={12} sm={9} item>
                <TextField type="message" label="Dodaj CV" multiline rows={4} placeholder='Jeśli chcesz Nam coś opowiedzieć o sobie napisz tutaj' fullWidth required />
              </Grid>

              <Grid className='contact-cv--button-section' xs={12} item>
                <button className='contact-cv--button' type="submit">Wyślij CV</button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>

  </div>
}
