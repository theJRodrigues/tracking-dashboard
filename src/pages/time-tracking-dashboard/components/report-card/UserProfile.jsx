import React from 'react'

const UserProfile = ({name, avatar}) => {
  return (
      <div>
        <figure>
          <img src={avatar} alt={name} />
        </figure>
        <div>
          <h2>Report for</h2>
          <h3>{name}</h3>
        </div>
      </div>
    
  )
}

export default UserProfile