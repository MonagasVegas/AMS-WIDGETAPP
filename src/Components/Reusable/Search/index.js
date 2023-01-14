import React from 'react'
import classnames from 'classnames'
import SearchIcon from '../../../assets/svg/SearchIcon.svg'
import { colors } from '../../../styles/Colors'

// eslint-disable-next-line react/prop-types
const SearchBar = ({ value, onChange, placeholder, className, id = '' }) => {
  return (
    <div className={classnames('w-full relative rounded-lg  flex items-center min-h-[2em]', className)} style={{ backgroundColor: colors.Grey100 }}>
      <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
        <img src={SearchIcon} />
      </div>
      <form
        action='#'
        autoComplete='off'
        style={{
          display: 'flex',
          width: '100%'
        }}
      >
        <input
          name={'search' + id}
          className='outline-none  block pl-10 w-full text-xs rounded-lg border placeholder-gray-400 placeholder-sm text-gray-400'
          type='search'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete='off'
          style={{ backgroundColor: colors.Grey100 }}
        />
      </form>

    </div>
  )
}

export default SearchBar
