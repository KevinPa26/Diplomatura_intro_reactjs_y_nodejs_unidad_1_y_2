import React from 'react'

const NosotrosPage = (props) => {
  return (
    <main>
        <div className='historia'>
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dicta exercitationem laboriosam quam in at, adipisci voluptas cupiditate incidunt, praesentium sed optio. Porro, ipsa nisi harum repudiandae rerum dicta inventore.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dicta exercitationem laboriosam quam in at, adipisci voluptas cupiditate incidunt, praesentium sed optio. Porro, ipsa nisi harum repudiandae rerum dicta inventore.</p>
        </div>
        <div className='staff'>
            <h2>Staff</h2>
            <div className='personas'>
                <div className='persona'>
                    <img src='img/nosotros/nosotros1.jpg' alt='Juan Gomez'/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dicta exercitationem laboriosam quam in at, adipisci voluptas cupiditate incidunt, praesentium sed optio. Porro, ipsa nisi harum repudiandae rerum dicta inventore.</p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default NosotrosPage