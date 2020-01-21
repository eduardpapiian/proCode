import React from 'react'
import './index.scss';
import cubeImg from "./img/cube.svg";
import sunImg from "./img/sun.svg";
import brainImg from "./img/brain.svg";
import eyeIcon from "./img/eye-icon.svg";
import listIcon from "./img/list-icon.svg";
import timeIcon from "./img/time-icon.svg";


export default class SecondBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          type: 'Статья',
          time: '1 час 15 минут',
          icon: cubeImg,
          text: 'Формирование эмоциональной связи с родителями',
          isChecked: true
        },
        {
          id: 2,
          type: 'Практика',
          time: '30 минут',
          icon: sunImg,
          text: 'Объяснить отцу и\\или другим членами семьи, проживают с вами о предстоящем этапе в вашей семье',
          isChecked: true
        },
        {
          id: 3,
          type: 'Статья',
          time: '1 час 15 минут',
          icon: brainImg,
          text: 'Формирование эмоциональной связи с родителями',
          isChecked: false
        },
        {
          id: 4,
          type: 'Статья',
          time: '1 час 15 минут',
          icon: brainImg,
          text: 'Формирование эмоциональной связи с родителями',
          isChecked: false
        },
        {
          id: 5,
          type: 'Практика',
          time: '30 минут',
          icon: sunImg,
          text: 'Объяснить отцу и\\или другим членами семьи, проживают с вами о предстоящем этапе в вашей семье',
          isChecked: false
        },
      ]
    }
  }
  test(checked, index){

  }
  componentDidMount() {
    console.log('second component did mount')
  }
  render() {
    return (
      <div className="second-block">
          <div>
            {this.state.list.map((item, index) => (
              <div className={`second-block__item ${item.isChecked ? 'active' : ''}`} key={index}>
                <div className="second-block__item_num">
                  {item.id}
                </div>
                <div className="second-block__item_icon-block">
                  <img src={item.icon} alt=""/>
                </div>
                <div className="second-block__item_main-block">
                  <div className="second-block__item_main-block_title">
                    {item.type === 'Статья' ? (
                      <div className="second-block__item_main-block_title_art">
                        <span><img src={eyeIcon} alt=""/> {item.type}</span><span className="time"><img src={timeIcon} alt=""/> {item.time}</span>
                      </div>
                    ) : (
                      <div className="second-block__item_main-block_title_test">
                        <span>{item.type}</span><span><img src={listIcon} alt=""/> Тест</span><span className="time"><img src={timeIcon} alt=""/>{item.time}</span>
                      </div>
                    )}
                  </div>
                  <div className="second-block__item_main-block_text">
                    <div>{item.text}</div>
                    <div></div>
                  </div>
                  <div className="second-block__item_main-block_actions">

                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    )
  }
}
