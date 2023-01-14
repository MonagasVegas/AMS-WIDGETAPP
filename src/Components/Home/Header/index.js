import React from 'react'
import logo from '../../../assets/images/logo.png'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MenuIcon from '@material-ui/icons/Menu'
import { Box } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'

function Header () {
  return (
    <div className='bg-[#F5F5F5] h-[40px]'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div className='flex w-full h-full justify-between'>
          <div className='self-center flex  '>
            <img src={logo} className='w-10 h-10' />
            <div className='bg-[#EDE7F6] rounded-md h-9  p-[6px] ml-20 self-center'>
              <MenuIcon className='self-center w-1/2 ' />
            </div>
          </div>
          <div className='self-center flex mr-20 '>
            <NotificationsNoneIcon className='justify-between mr-5 self-center' />
            <Avatar src={<PersonIcon fontSize='small' />} />
          </div>
        </div>
      </Box>
    </div>
  )
}

export { Header }
