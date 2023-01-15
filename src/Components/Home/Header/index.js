import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import logo from '../../../assets/images/logo.png'
import useLocalStorage from '../../Hooks/useLocalStorage'

function Header () {
  const [shoppingcart, setShoppingCart] = useState([])
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  const { getStorage } = useLocalStorage()

  useEffect(() => {
    const badgeContent = getStorage('@shoppingcart')
    setShoppingCart(JSON.parse(badgeContent))
  }, [shoppingcart])

  const route = window.location.href.split('/')
  const productCode = window.location.href.split('product')[1] || null

  console.log(window.location.href)
  console.log(window.location.href.split('product'))

  return (
    <div className='flex w-full bg-[#F5F5F5] h-[55px] justify-between'>
      <div className='self-center flex  ml-5  w-full'>
        <Button onClick={handleClick}>
          <img src={logo} className='w-10 h-10' />
        </Button>
        <IconButton onClick={() => navigate('/product')}>
          <MenuRoundedIcon className='self-center' />
        </IconButton>

        <div className='self-center sm:ml-10  w-full'>
          <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
            <Link color='inherit' href='/'>
              Home
            </Link>
            {route.includes('product') &&
              <Link color='inherit' href='/#/product'>
                Producto
              </Link>}
            {productCode &&
              <Typography color='textPrimary'>Detalle de producto</Typography>}
          </Breadcrumbs>
        </div>

      </div>
      <div className='flex justify-end  sm:ml-[55%] md:ml-[5%]'>
        <IconButton>
          <Badge badgeContent={shoppingcart} color='secondary'>
            <ShoppingCartIcon className='justify-between self-center' />
          </Badge>
        </IconButton>
      </div>
      <div className='self-center flex sm:mr-14 '>
        <AccountCircleIcon />
      </div>
    </div>
  )
}

export { Header }
