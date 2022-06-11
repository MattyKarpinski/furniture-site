import React from 'react'
import './ContactCvForm.scss';

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
          <form className='contact-cv--form'>
            <div className='contact-cv--form-name'>
              <label>Imię *</label>
              <input></input>
            </div>
            <div className='contact-cv--form-surname'>
              <label>Nazwisko *</label>
              <input></input>
            </div>
            <div className='contact-cv--form-tel'>
              <label>Numer telefonu *</label>
              <input></input>
            </div>
            <div className='contact-cv--form-mail'>
              <label>Adres E-mail *</label>
              <input></input>
            </div>
            <div className='contact-cv--form-job'>
              <label>Stanowisko pracy *</label>
              <select>
                <option value="Pilarz">Pilarz</option>
                <option value="Malarz">Malarz</option>
                <option value="Monter">Monter</option>
              </select>
            </div>
            <div className='contact-cv--form-info'>
              <label>Dodatkowe informacje</label>
              <textarea></textarea>
            </div>
            <div className='contact-cv--form-cv'>
              <label>Dodaj CV *</label>
              <input className='xyz'></input>
            </div>
          </form>
        </div>
        
    </div>
  }
