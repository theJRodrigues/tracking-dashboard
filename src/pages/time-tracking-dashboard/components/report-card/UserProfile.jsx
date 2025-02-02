import React from 'react'

const UserProfile = ({name, avatar}) => {
  return (
      <div>
        <figure>
          <img src={avatar} alt={name} />
        </figure>
        <div>
          <h3>Report for</h3>
          <h1>{name}</h1>
        </div>
      </div>
    
  )
}

export default UserProfile