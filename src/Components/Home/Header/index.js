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
import { Box } from '@material-ui/core'
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

  console.log(shoppingcart)

  return (
    <div className='bg-[#F5F5F5] h-[55px]'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div className='flex w-full h-full justify-between'>
          <div className='self-center flex  ml-5 '>
            <Button onClick={handleClick}>
              <img src={logo} className='w-10 h-10' />
            </Button>
            <IconButton onClick={() => navigate('/product')}>
              <MenuRoundedIcon className='self-center' />
            </IconButton>

            <div className=' md:self-center sm:ml-10'>
              <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
                <Link color='inherit' href='/'>
                  Home
                </Link>
                <Link color='inherit' href='/#/product'>
                  Producto
                </Link>
                <Typography color='textPrimary'>Detalle de producto</Typography>
              </Breadcrumbs>
            </div>

          </div>
          <div className='flex justify-end  sm:ml-[55%] md:ml-[55%]'>
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
      </Box>
    </div>
  )
}

export { Header }
