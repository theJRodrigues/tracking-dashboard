import PropTypes from 'prop-types'
const TimeFrameOption = ({timeFrameOpt, setOption, isChecked}) => {
  return (
    <li className={`text-Desaturated-blue hover:text-white duration-100 ${isChecked && 'text-white'}`}>
      <button onClick={setOption} 
      key={timeFrameOpt} className='cursor-pointer capitalize'> 
      {timeFrameOpt}
      </button>
    </li>
    
  )
}


TimeFrameOption.propTypes ={
  timeFrameOpt: PropTypes.string,
  setOption: PropTypes.func,
  isChecked: PropTypes.bool
}

export default TimeFrameOption