import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

const ImageTypeCard = ({type}) => {
  const urlImage = useMemo(() => {
    switch (type) {
      case 'Self Care':
        return {"url": '/assets/images/icon-self-care.svg', "color": "bg-self-care"}
      case 'Work':
        return {"url": '/assets/images/icon-work.svg', "color": "bg-work"}
      case 'Play':
        return {"url": '/assets/images/icon-play.svg', "color": "bg-play"}
      case 'Study':
        return {"url": '/assets/images/icon-study.svg', "color": "bg-study"}
      case 'Exercise':
        return {"url": '/assets/images/icon-exercise.svg', "color": "bg-exercise"}
      case 'Social':
        return {"url": '/assets/images/icon-social.svg', "color": "bg-social"}
    }
  }, [type])

  return (
    <figure className={`h-[98%] relative ${urlImage.color} overflow-hidden rounded-lg`}>
      <img className='absolute w-14 -top-1 right-5' src={urlImage.url} alt={type} />
    </figure>
  )
}

ImageTypeCard.propTypes = {
  type: PropTypes.string
}
export default ImageTypeCard