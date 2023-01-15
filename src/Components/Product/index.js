import React, { useEffect, useState } from 'react'
import SearchBar from '../Reusable/Search'
import Card from '../Reusable/Card'
import Img from '../../atomic-components/tags/Img'
import image from '../../assets/images/image.png'
// import { getProducts } from '../../services/getProducts'
import { Header } from '../Home/Header'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../Hooks/useLocalStorage'

const Product = () => {
  const [products, setProducts] = useState([])
  //* productos filtrados.
  const [filterProducts, setFiltersProducts] = useState([])
  /** query de busqueda o condicion de filtrado, el texto que escribes */
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const { getStorage } = useLocalStorage()

  useEffect(() => {
    // getProducts().then(res => {
    //   const response = res.data
    //   setProducts(response)
    // }).catch((error) => {
    //   console.log(error)
    // })
    /** Cambiamos el llamado al API para usarlo ahora con la capa de persistencia. */
    const data = getStorage('@products')
    setProducts(JSON.parse(data))
  }, [])

  const handleDetail = (event) => {
    console.log(event.currentTarget.id)
    const id = event.currentTarget.id
    navigate(`/product/${id}`)
  }

  const onChangeSearchQuery = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    /** Cuando no hay searchQuery/ clausula de guarda , si no hay query de busqyeda se asigna todos los productos. */
    if (!searchQuery) {
      setFiltersProducts(products)
      return
    }

    // garantizando las minusculas con el tolowerCase.
    const newSearchQuery = searchQuery?.toLowerCase() || ''
    const newProduct = products.filter(product => product.brand.toLowerCase().includes(newSearchQuery) || product.model.toLowerCase().includes(newSearchQuery))
    setFiltersProducts(newProduct)
  }, [searchQuery, products])

  return (

    <>
      <div>
        <Header />
      </div>

      <div className='bg-[#f9fafc] rounded-md py-4 border border-neutral20 w-11/12 sm:ml-8 sm:mt-4 '>
        <div className=' flex justify-end '>
          <SearchBar
            onChange={onChangeSearchQuery}
            className='w-2/4 mr-3 '
            placeholder='Buscar producto'
          />
        </div>
        <div className='py-4 grid grid-cols-4 gap-4 px-3'>
          {filterProducts.map((product) => (
            <Card key={product.id} className='flex flex-col gap-1 p-3 mt-4 cursor-pointer' onClick={handleDetail} id={product.id}>
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
