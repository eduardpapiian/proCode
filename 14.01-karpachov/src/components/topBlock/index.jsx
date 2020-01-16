import React, {Component} from 'react';
import Timeline from '../Timeline'
import './index.scss';

class topBlock extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillMount(){
    console.log('will mount!!')
  }
  componentDidMount() {
    console.log('did mount!!')
  }
  render(){
    return(
      <div className="layout">
        <div className="layout__block">
          <div className="layout__block_info">
            <div className="layout__block_info_total-time">
              <h2>1 год, 3-ий месяц</h2>
            </div>
            <div className="layout__block_info_total-text">
              <p>Прохождение этой темы позволит вам избежать частных </p>
              <p>ошибок при воспитании детей от 0 до 3 лет. Результат - </p>
              <p>правильные и четкие шаги для достижения цели.</p>
            </div>
            <div>
              <Timeline/>
            </div>
            <div>
              Названия актуальной темы
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default topBlock;
