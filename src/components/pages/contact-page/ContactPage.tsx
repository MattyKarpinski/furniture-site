import React from 'react';
import './ContactPage.scss';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import { TextBlock } from '../../assets/text-block/TextBlock';
import { TextBox } from '../../assets/text-box/TextBox';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import Map from '../../features/map/Map';
import { MainHeaderOne } from '../../assets/main-header-one/MainHeaderOne';

import { Card, CardContent, Grid, TextField, ThemeProvider, Checkbox, experimental_sx as sx } from '@mui/material';
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
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: sx({
          '& .MuiOutlinedInput-root': {
            "& > fieldset": {
              borderColor: '#DDC79F',
            },
          },
        }),
      },
    },
  },
});

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ContactPage = () => {

  return (
    <div className='contact-page'>
      <MainHeaderOne> Kontakt</MainHeaderOne>
      <MainHeaderTwo>Zapraszamy do kontaktu</MainHeaderTwo>
      <TextBox>
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant
          consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Dui, habitant consectetur adipiscing elit.
          Dui, habitant consectetur adipiscing. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Dui, habitant consectetur adipiscing elit.
          Dui, habitant Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Dui, habitant consectetur adipiscing elit. Dui, habitant 
        </TextBlock>
      </TextBox>
      <section id='contact-page--information'>
        <div className='contact-page--data'>
          <div className='contact-page--information-head'>
            <h3 className='contact-page--information-header'>Kontakt z firm??</h3>
          </div>
          <div className='contact-page--data-body'>
              <div className='contact-page--tel' >
                <i><BsFillTelephoneFill></BsFillTelephoneFill></i>
                <a href="tel:+48-567-234-789">tel: +48 456 734 723</a>
              </div>
              <div className='contact-page--email'>
                <i><AiOutlineMail></AiOutlineMail></i>
                <a href="mailto:j.kowalski@furniturezone.pl">e-mail:<br></br>furniturezone<br></br>@gmail.com</a>
              </div>
              <div className='contact-page--open-hours'>
                <i><AiOutlineClockCircle></AiOutlineClockCircle></i>
                <span>Pon - Pt 08:00 - 16:00</span>
              </div>
              <h4>ADRES</h4>
              <div className='contact-page--adress'>
                <i><SiGooglemaps></SiGooglemaps></i>
                <div>
                  <span>ul. Mazowiecka 12</span>
                  <span>01 - 345 Warszawa</span>
                </div>
              </div>
              <h4>DANE</h4>
              <ul className='contact-page--data-list'>
                <li><span>Prezes: Jan Kowalski</span></li>
                <li>
                  <span>Kontakt:</span>
                  <a href="mailto:j.kowalski@furniturezone.pl">j.kowalski@furniturezone.pl</a>
                </li>
                <li><span>NIP: 34567809</span></li>
                <li><span>REGON: 354-29-61-72</span></li>
              </ul>
          </div>
        </div>
        <div className='contact-page--form'>
          <div className='contact-page--information-head'>
            <h3 className='contact-page--information-header'>Formularz kontaktowy</h3>
          </div>
          <div className='contact-page--form-body'>
          <ThemeProvider theme={theme}>
            <Card className='contact-page--form-card' style={{border: "none", boxShadow: "none"}}>
              <CardContent className='contact-page--form-content'>
                <form>
                  <Grid  container spacing={3.5}>
                    <Grid xs={12} sm={6} item borderColor="primary">
                      <TextField label="Imi??" placeholder='Wpisz swoje Imi??'  fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField label="Nazwisko" placeholder='Wpisz swoje Nazwisko' fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField type="number" label="Numer telefonu" placeholder='Wpisz sw??j numer telefonu' fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField type="email" label="Adres E-mail" placeholder='Wpisz sw??j adres e-mail' fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <TextField label="Wiadomo????" multiline rows={4} placeholder='Napisz swoj?? wiadomo????' fullWidth required />
                    </Grid>
                    <Grid xs={12} item className='contact-page--form-check-box'>
                      <Grid xs={12} sm={1} item >
                        <Checkbox {...label} required />
                      </Grid>
                      <Grid xs={12} sm={10} item >
                        <span>
                          Zapozna??em si?? z Polityk?? prywatno??ci serwisu www.staltest.pl oraz wyra??am zgod?? na przetwarzanie przez Furniturezone,
                          Mazowiecka 12 01-345 Warszawa, udost??pnionych przeze mnie danych osobowych na zasadach opisanych w Polityce prywatno??ci
                          dost??pnej w Serwisie. O??wiadczam, ??e s?? mi znane cele przetwarzania danych oraz moje uprawnienia. Niniejsza zgoda mo??e
                          by?? wycofana w dowolnym czasie poprzez kontakt z Administratorem pod adresem kontakt@furniuturezone.com, bez wp??ywu na
                          zgodno???? z prawem przetwarzania, kt??rego dokonano na podstawie zgody przed jej cofni??ciem.<br></br><br></br>
                          Wi??cej informacji dotycz??cych przetwarzania danych osobowych - Obowi??zek Informacyjny
                          </span>
                      </Grid>
                    </Grid>
                    <Grid className='contact-page--button-section' xs={12} item>
                      <button className='contact-page--button' type="submit">Wy??lij wiadomo????</button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </ThemeProvider>
          </div>
        </div>
      </section>
      <Map></Map>
    </div>
  )
}

export default ContactPage;