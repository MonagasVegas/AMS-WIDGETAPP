import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import { Box } from '@material-ui/core'
import logo from '../../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'

function Header () {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='bg-[#F5F5F5] h-[55px]'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div className='flex w-full h-full justify-between'>
          <div className='self-center flex  '>
            <Button onClick={handleClick}>
              <img src={logo} className='w-10 h-10' />
            </Button>

            <div className='bg-[#EDE7F6] rounded-md h-9  p-[6px] ml-20 self-center'>
              <MenuIcon className='self-center w-1/2 ' />
            </div>
          </div>
          <div className='self-center flex mr-20 '>
            <ShoppingCartIcon className='justify-between mr-5 self-center' />
            <AccountCircleIcon />
          </div>
        </div>
      </Box>
    </div>
  )
}

export { Header }
