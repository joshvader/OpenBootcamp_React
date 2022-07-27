import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({contact}) => {
  return (
    <div>
       <h2>
        Nombre: {contact.name}
       </h2>
       <h3>
         Apellido: {contact.lastname}
       </h3>
       <h3>
         Email: {contact.email}
       </h3>
       <h4>
        Estado de la Conexión:  {contact.conectado ? 'CONECTADO EN LINEA' : 'CONTACTO NO DISPONIBLE'}
       </h4>
    </div>
 )
}

ContactComponent.propTyes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent