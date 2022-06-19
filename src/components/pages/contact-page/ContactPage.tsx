import React from 'react';
import './ContactPage.scss';
import BreadcrumbsBackground from '../../assets/breadcrumbs-background/BreadcrumbsBackground';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import { TextBlock } from '../../assets/text-block/TextBlock';
import { TextBox } from '../../assets/text-box/TextBox';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import Map from '../../features/map/Map';

import { Card, CardContent, Grid, TextField, Box, MenuItem, ThemeProvider, Checkbox, Typography } from '@mui/material';
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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ContactPage = () => {

  const [job, setJob] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJob(event.target.value as string)
  }

  return (
    <div className='contact-page'>
      <BreadcrumbsBackground></BreadcrumbsBackground>
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
            <h3 className='contact-page--information-header'>Kontakt z firmą</h3>
          </div>
          <div className='contact-page--data-body'>
              <div className='contact-page--tel' >
                <i><BsFillTelephoneFill></BsFillTelephoneFill></i>
                <a href="tel:+48-567-234-789">tel: +48 456 734 723</a>
              </div>
              <div className='contact-page--email'>
                <i><AiOutlineMail></AiOutlineMail></i>
                  <span>e-mail:<br></br>furniturezone@gmail.com</span>
              </div>
              <div className='contact-page--open-hours'>
                <i><AiOutlineClockCircle></AiOutlineClockCircle></i>
                <span>Pon - Pt 08:00 - 16:00</span>
              </div>
          <h3>ADRES</h3>
          <div className='contact-page--adress'>
            <i><SiGooglemaps></SiGooglemaps></i>
            <span>ul. Mazowiecka 12<br></br>01 - 345 Warszawa</span>
          </div>
          <h3>DANE</h3>
          <ul className='contact-page--data-list'>
            <li><span>Prezes: Jan Kowalski</span></li>
            <li><span>Kontakt: j.kowalski@furniturezone.pl</span></li>
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
            <Card className='contact-page--form' style={{border: "none", boxShadow: "none"}}>
              <CardContent className='contact-page--form-content'>
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
                    <Grid xs={12} sm={12} item>
                      <TextField label="Wiadomość" multiline rows={4} placeholder='Jeśli chcesz Nam coś opowiedzieć o sobie napisz tutaj' fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <Checkbox {...label} required  />
                        <span>
                        Zapoznałem się z Polityką prywatności serwisu www.staltest.pl oraz wyrażam zgodę na przetwarzanie przez Furniturezone,
                        Mazowiecka 12 01-345 Warszawa, udostępnionych przeze mnie danych osobowych na zasadach opisanych w Polityce prywatności
                        dostępnej w Serwisie. Oświadczam, że są mi znane cele przetwarzania danych oraz moje uprawnienia. Niniejsza zgoda może
                        być wycofana w dowolnym czasie poprzez kontakt z Administratorem pod adresem kontakt@furniuturezone.com, bez wpływu na
                        zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.<br></br><br></br>
                        Więcej informacji dotyczących przetwarzania danych osobowych - Obowiązek Informacyjny
                        </span>
                      </Grid>
                    <Grid className='contact-page--button-section' xs={12} item>
                      <button className='contact-page--button' type="submit">Wyślij wiadomość</button>
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
