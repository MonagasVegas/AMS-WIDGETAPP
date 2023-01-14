import React, { useEffect, useState } from 'react'
import Img from '../../atomic-components/tags/Img'
import { Header } from '../Home/Header'
import Card from '../Reusable/Card'
import image from '../../assets/images/image.png'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductsById } from '../../services/getProductsById'

const ProductDetails = () => {
  const [product, setProduct] = useState([])
  const navigate = useNavigate()
  const { productID } = useParams()

  const handleGoBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    getProductsById(productID).then(res => {
      setProduct(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [productID])

  console.log(product)

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='sm:mt-5 sm:ml-56'>

        <Card className='gap-1 w-3/4  self-center justify-center align-center  rounded-none'>
          <header className=' flex flex-row '>
            <div className='overflow-hidden w-1/2'>
              <Img
                className='w-full object-cover mt-16'
                src={product.imgUrl || image}
                alt='Imagen del personal'
              />
            </div>
            <div className='bg-[#dfdee3]  flex flex-col w-full px-2 justify-start'>
              <p className='text-[15px] font-semibold py-4 text-[#013348]'>Producto</p>
              <div className='border-b-[0.5px]  border-gray-400 ' />
              <p className='text-[13px] not-italic py-2 font-semibold flex text-[#013348] '>Información del producto</p>
              <p className='text-[12px] font-bold text-[#000] text-right'>Marca:</p>
              <p className='text-[12px] font-semibold text-[#013348] text-right'>{product.brand}</p>
              <p className='text-[12px] text-right not-italic  text-[#000] font-bold'>Modelo:</p>
              <p className='text-[12px] text-right not-italic  text-[#013348] font-semibold'>{`${product.model}` || '-'}</p>
              <p className='text-[12px] text-right not-italic  font-bold text-[#000]'>Precio:</p>
              <p className='text-[12px] text-right not-italic  font-semibold text-[#013348]'>{`${product.price}` || '-'}</p>
              <p className='text-[12px] text-right not-italic font-bold text-[#000] '>CPU: </p>
              <p className='text-[12px] text-right not-italic font-semibold text-[#013348] '>{`${product.cpu}` || '-'}</p>
              <p className='text-[12px] text-right not-italic  font-bold text-[#000]'>RAM:</p>
              <p className='text-[12px] text-right not-italic  font-semibold text-[#013348]'>{`${product.ram}` || '-'}</p>
              <p className='text-[12px] text-right not-italic font-bold text-[#000] '>Sistema Operativo:</p>
              <p className='text-[12px] text-right not-italic font-semibold text-[#013348] '>{`${product.os}` || '-'}</p>
              <p className='text-[12px] text-right not-italic font-bold text-[#000] '>Resolucion de pantalla: </p>
              <p className='text-[12px] text-right not-italic font-semibold text-[#013348] '>{`${product.displayResolution}` || '-'}</p>
              <p className='text-[12px] text-right not-italic font-bold text-[#000] '>Bateria:</p>
              <p className='text-[12px] text-right not-italic font-semibold text-[#013348] '>{`${product.battery}` || '-'}</p>
              <p className='text-[12px] text-right not-italic font-bold text-[#000] '>Camaras: </p>
              {product?.primaryCamera?.map((camera) => (
                <p key={camera} className='text-[14px] text-right not-italic font-semibold text-[#013348] '>
                  {camera}
                </p>
              ))}
              <p className='text-[12px] text-right not-italic font-bold text-[#000]'>Dimensiones: </p>
              <p className='text-[12px] text-right not-italic font-semibold text-[#013348]'>{`${product.dimentions}` || '-'}</p>
              <p className='text-[12px] text-right not-italic font-bold text-[#000] '>Peso: </p>
              <p className='text-[12px] text-right not-italic font-semibold text-[#013348] '>{`${product.weight}` || '-'}</p>
            </div>
          </header>

          <footer className='h-full flex flex-col'>
            <div className='bg-[#f2f2f2] px-2 h-full'>
              <p className='text-[10px] font-semibold py-4 text-[#013348]'>Ficha técnica del producto</p>

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
