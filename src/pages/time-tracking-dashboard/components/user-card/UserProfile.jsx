import React from 'react'
import PropTypes from 'prop-types'

const UserProfile = ({name, avatar}) => {
  return (
      <div className='bg-blue rounded-2xl p-3 flex gap-1.5 items-center'>
        <figure>
          <img src={avatar} alt={name} className='w-9 rounded-full border-3 border-white'/>
        </figure>
        <div className='w-full'>
          <p className='text-Pale-Blue text-sm'>Report for</p>
          <h2 className='text-white font-Rubik-light text-xl'>{name}</h2>
        </div>
      </div>
    
  )
}
UserProfile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
}

export default UserProfile
