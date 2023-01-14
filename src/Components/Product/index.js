import React, { useEffect, useState } from 'react'
import SearchBar from '../Reusable/Search'
import Card from '../Reusable/Card'
import Img from '../../atomic-components/tags/Img'
import image from '../../assets/images/image.png'
import { getProducts } from '../../services/getProducts'
import { Header } from '../Home/Header'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getProducts().then(res => {
      const response = res.data
      setProducts(response)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const handleDetail = () => {
    navigate('/productDetails')
  }

  return (

    <>
      <div>
        <Header />
      </div>

      <div className='bg-[#f9fafc] rounded-md py-4 border border-neutral20 w-11/12 sm:ml-8 sm:mt-4 '>
        <div className=' flex justify-end '>
          <SearchBar
            className='w-2/4 mr-3 '
            placeholder='Buscar producto'
          />
        </div>
        <div className='py-4 grid grid-cols-4 gap-4 px-3'>
          {products.map((product) => (
            <Card key={product.id} className='flex flex-col gap-1 p-3 mt-4 cursor-pointer' onClick={handleDetail}>
              <header className=' w-2/5 flex flex-row self-center'>
                <div className='rounded-lg  overflow-hidden'>
                  <Img
                    className='lg:w-full md:w-full sm:w-full object-cover '
                    src={product.imgUrl || image}
                    alt='Imagen del personal'
                  />
                </div>
              </header>
              <div className='border-b-[1px] border-gray-200 ' />

              <footer className='h-full flex flex-col relative '>
                <div className='flex flex-col'>
                  <p className=' sm:text-sm md:text-sm  lg:text-sm  font-bold text-gray-800'>{product.brand}</p>
                  <p className=' sm:text-xs md:text-xs lg:text-xs not-italic font-semibold flex '>{product.model}</p>
                </div>
                <div className='flex flex-row justify-end'>
                  <p className='sm:text-xs md:text-xs lg:text-xs not-italic font-semibold flex'>{`$${product.price}`}</p>
                </div>
              </footer>

            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default Product
