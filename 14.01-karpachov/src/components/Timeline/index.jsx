import React from 'react'
import './index.scss';

export default function Timeline (props) {
  return (
    <div className="timeline">
      <div className="line">

      </div>
      <div className="numbers">
        <div className='numbers_number'>
          <span>10</span>
          <div class="text">
            Тем <br/>
            всего
          </div>
        </div>
        <div className='numbers_number'>
          <span>6</span>
          <div class="text">
            Тем <br/>
            выволнено
          </div>
        </div>
      </div>
    </div>
  )
}
