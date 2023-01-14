import React from 'react'
import Img from '../../atomic-components/tags/Img'
import { Header } from '../Home/Header'
import Card from '../Reusable/Card'
import image from '../../assets/images/image.png'
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='sm:mt-5 sm:ml-56'>
        <Card className='gap-1 w-3/4  self-center justify-center align-center  rounded-none'>
          <header className=' flex flex-row '>
            <div className='overflow-hidden border border-red-600 w-1/2'>
              <Img
                className='lg:w-full md:w-full sm:w-full object-cover '
                src={image}
                alt='Imagen del personal'
              />
            </div>
            <div className='bg-[#dfdee3]  flex flex-col w-full px-2 justify-start'>
              <p className='text-[14px] font-semibold text-[#013348]'>Producto</p>
              <div className='border-b-[0.5px]  border-gray-400 ' />
              <p className='text-[10px] not-italic font-semibold flex text-[#013348] '>Información del producto</p>
              <p className='text-[10px] font-semibold text-[#013348] text-right'>Marca:sfddfds</p>
              <p className='text-[10px] text-right not-italic  text-[#013348] font-semibold'>Modelo:ddsfdsfddf</p>
              <p className='text-[10px] text-right not-italic  font-semibold text-[#013348]'>Precio:</p>
              <p className='text-[10px] text-right not-italic  font-semibold text-[#013348]'>RAM:</p>
              <p className='text-[10px] text-right not-italic font-semibold text-[#013348] '>Sistema Operativo:</p>
              <p className='text-[10px] text-right not-italic font-semibold text-[#013348] '>Resolucion de pantalla:</p>
              <p className='text-[10px] text-right not-italic font-semibold text-[#013348] '>Bateria:</p>
              <p className='text-[10px] text-right not-italic font-semibold text-[#013348] '>Camaras:</p>
              <p className='text-[10px] text-right not-italic font-semibold text-[#013348] '>Dimensiones:</p>
              <p className='text-[10px] text-right not-italic font-semibold text-[#013348] '>Peso:</p>
            </div>
          </header>

          <footer className='h-full flex flex-col'>
            <div className='bg-[#f2f2f2] px-2 h-full'>
              <p className='text-[10px] font-semibold text-[#013348]'>Ficha técnica del producto</p>
              <p className='text-[10px] text-right not-italic font-semibold text-[#013348] '>Sistema Operativo:</p>
              <div className='flex flex-col'>
                <label className='text-[10px] not-italic font-semibold text-[#013348]'>
                  <input type='checkbox' /> Almacenamiento
                </label>
                <label className=' text-[10px] not-italic font-semibold  text-[#013348]'>
                  <input type='checkbox' /> Colores
                </label>
              </div>

              <div>&nbsp;&nbsp;</div>
              <div className='flex justify-end'>
                <button className='rounded-full mr-8 py-1 px-4 bg-[#dfdee3]'><p className='text-[#0e3453]'>Añadir</p></button>
                <button className='rounded-full py-1 px-4 bg-[#dfdee3]' onClick={handleGoBack}><p className='text-[#0e3453]'>Volver</p></button>
              </div>
              <div>&nbsp;&nbsp;</div>
            </div>
          </footer>
        </Card>
      </div>
    </>
  )
}

export default ProductDetails
