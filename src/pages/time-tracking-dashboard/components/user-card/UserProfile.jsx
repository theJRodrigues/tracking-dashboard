import React from 'react'
import PropTypes from 'prop-types'

const UserProfile = ({name, avatar}) => {
  return (
      <div className='bg-blue rounded-lg p-4'>
        <figure className='size-10 rounded-full border-3 border-white mb-4'>
          <img src={avatar} alt={name} />
        </figure>
        <div>
          <h3 className='text-Pale-Blue mb-0.5'>Report for</h3>
          <h2 className='text-white text-5xl font-Rubik-light w-fit'>{name}</h2>
        </div>
      </div>
    
  )
}
UserProfile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
}

export default UserProfile
