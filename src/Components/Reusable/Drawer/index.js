import React from 'react'
import Popover from '@material-ui/core/Popover'

const Drawer = ({ container, handleClick, handleClose, anchorEl, open }) => {
  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        {container}
      </Popover>

    </>
  )
}

export default Drawer
