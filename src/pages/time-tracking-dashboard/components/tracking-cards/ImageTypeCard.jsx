import PropTypes from 'prop-types'

const ImageTypeCard = ({type, urlImage, bgColor}) => {
  return (
    <figure className={``} style={{backgroundColor: bgColor}}>
      <img className='' src={urlImage} alt={type} />
    </figure>
  )
}

ImageTypeCard.propTypes = {
  type: PropTypes.string,
  urlImage: PropTypes.string,
  bgColor: PropTypes.string,
}
export default ImageTypeCard