import React from 'react'
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
  return (
    <main className='holder'>
        <div className='homeimg'>
            <img src='img/home/img01.jpg' alt='avion'/>
        </div>
        <div className='columnas'>
            <div className='bienvenidos'>
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dicta exercitationem laboriosam quam in at, adipisci voluptas cupiditate incidunt, praesentium sed optio. Porro, ipsa nisi harum repudiandae rerum dicta inventore.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dicta exercitationem laboriosam quam in at, adipisci voluptas cupiditate incidunt, praesentium sed optio. Porro, ipsa nisi harum repudiandae rerum dicta inventore.</p>
            </div>
            <div className='testimonios'>
                <h2>Testimonios</h2>
                <div className='testimonio'>
                    <span className='cita'>Simplemente Excelente</span>
                    <span className='auto'>Juan Perez - zapatos.com</span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default HomePage