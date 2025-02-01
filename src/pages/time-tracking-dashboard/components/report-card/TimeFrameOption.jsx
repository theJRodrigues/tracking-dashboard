import PropTypes from 'prop-types'
const TimeFrameOption = ({timeFrameOpt, setOption}) => {
  return (
    <li>
      <button onClick={setOption} 
      key={timeFrameOpt} className='cursor-pointer'> 
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