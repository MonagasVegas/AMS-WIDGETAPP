import React from 'react'
import { Header } from './Header'
import ilustracion from '../../assets/images/ilustracion.png'

function Home () {
  return (
    <div className='w-full'>
      <div>
        <Header />
      </div>
      <div className='self-center flex justify-center w-full'>
        <img src={ilustracion} className='w-3/5 mt-10' />
      </div>
    </div>
  )
}

export { Home }
