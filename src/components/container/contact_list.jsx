import React from 'react'
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

 const defaultContact = new Contact('Josué', 'Valenzuela', 'josuevalenzuela87@gmail.com');

  return (
    <div>
        <div>
            Bienvenido
        </div>
        <ContactComponent contact={defaultContact} />
    </div>
  )
}

export default ContactListComponent;