import React from 'react'

const ContactoPage = () => {
  return (
    <main>
        <div>
            <h2>Contacto Rápido</h2>
            <form action='' method='' className='formulario'>
                <p>
                    <label for='nombre'>Nombre</label>
                    <input type='text' name='nombre' id='nombre'/>
                </p>
                <p>
                    <label for='email'>Email</label>
                    <input type='text' name='email' id='email'/>
                </p>
                <p>
                    <label for='tel'>Teléfono</label>
                    <input type='text' name='tel' id='tel'/>
                </p>
                <p>
                    <label for='msg'>Mensaje</label>
                    <input type='text' name='msg' id='msg'/>
                </p>
                <p class='acciones'>
                    <input type='submit' value={'Enviar'}/>
                </p>
            </form>
        </div>
        <div>
            <h2>Otras vias de comunicación</h2>
            <p>También puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Teléfono: 43242388</li>
                <li>Email: contacto@Transportesx.com.ar</li>
                <li>Facebook:</li>
                <li>Twitter:</li>
                <li>Skype:</li>
            </ul>
        </div>
    </main>
  )
}

export default ContactoPage