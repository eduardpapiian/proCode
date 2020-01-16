import React from 'react'
import './index.scss';

export default function Timeline (props) {
  return (
    <div className="timeline">
      <div className="line">
        <div className="time" style={{ width: props.value + '%'}}>

        </div>
      </div>
      <div className="numbers">
        <div className='numbers_number'>
          <span>10</span>
          <div className="text">
            Тем <br/>
            всего
          </div>
        </div>
        <div className='numbers_number'>
          <span>6</span>
          <div className="text">
            Тем <br/>
            выволнено
          </div>
        </div>
      </div>
    </div>
  )
}
