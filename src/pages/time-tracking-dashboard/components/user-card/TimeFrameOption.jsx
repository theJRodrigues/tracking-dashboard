import PropTypes from 'prop-types'
const TimeFrameOption = ({timeFrameOpt, setOption}) => {
  return (
    <li className='text-Desaturated-blue hover:text-white duration-100'>
      <button onClick={setOption} 
      key={timeFrameOpt} className='cursor-pointer capitalize'> 
      {timeFrameOpt}
      </button>
    </li>
    
  )
}


TimeFrameOption.propTypes ={
  timeFrameOpt: PropTypes.string,
  setOption: PropTypes.func
}

export default TimeFrameOption