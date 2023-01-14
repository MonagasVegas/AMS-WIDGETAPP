import React from 'react'
import Img from '../../atomic-components/tags/Img'
import { Header } from '../Home/Header'
import Card from '../Reusable/Card'
import image from '../../assets/images/image.png'

const ProductDetails = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='sm:mt-4'>
        <Card className='gap-1 w-1/2 self-center justify-center align-center ml-28'>
          <header className=' flex flex-row '>
            <div className='overflow-hidden border border-red-600 w-1/2'>
              <Img
                className='lg:w-full md:w-full sm:w-full object-cover '
                src={image}
                alt='Imagen del personal'
              />
            </div>
            <div className='bg-slate-200  flez flez-col w-full rounded-lg'>
              <p className=' sm:text-sm md:text-sm  lg:text-sm  font-bold text-gray-800'>Marca</p>
              <p className=' sm:text-xs md:text-xs lg:text-xs not-italic font-semibold flex '>Modelo</p>
              <p className=' sm:text-sm md:text-sm  lg:text-sm  font-bold text-gray-800'>Precio</p>
              <p className=' sm:text-xs md:text-xs lg:text-xs not-italic font-semibold flex '>CPU</p>
              <p className=' sm:text-sm md:text-sm  lg:text-sm  font-bold text-gray-800'>RAM</p>
              <p className=' sm:text-xs md:text-xs lg:text-xs not-italic font-semibold flex '>Sistema Operativo</p>
            </div>
          </header>

          <footer className='h-full flex flex-col'>
            <div className='bg-slate-600 rounded-lg'>
              <h1>Ficha tecnica del producto</h1>
              <h1>TRES</h1>
            </div>
          </footer>
        </Card>
      </div>
    </>
  )
}

export default ProductDetails
