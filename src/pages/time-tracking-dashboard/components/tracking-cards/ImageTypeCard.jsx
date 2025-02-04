import PropTypes from 'prop-types'

const ImageTypeCard = ({type, urlImage, bgColor}) => {
  return (
    <figure className='w-full h-7 relative' style={{backgroundColor: bgColor}}>
      <img className=' absolute right-2 -top-0.5' src={urlImage} alt={type} />
    </figure>
  )
}

ImageTypeCard.propTypes = {
  type: PropTypes.string,
  urlImage: PropTypes.string,
  bgColor: PropTypes.string,
}
export default ImageTypeCard