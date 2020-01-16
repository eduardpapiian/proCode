import React, {Component} from 'react';
import rectangle from './img/Polygon.svg';
import './index.scss';

class TaskModule extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskList: [
        {
          id: '1',
          text: 'Сформировать эмоциональную привязанность с ребенком',
          selected:true
        },
        {
          id: '2',
          text: 'Объяснить отцу или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье',
          selected:true
        },
        {
          id: '3',
          text: 'Сформировать эмоциональную привязанность с ребенком, объяснить отцу или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье. Сформировать эмоциональную привязанность с ребенком, объяснить отцу или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье.Сформировать эмоциональную привязанность с ребенком',
          selected:false
        },
        {
          id: '4',
          text: 'Объяснить отцу или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье',
          selected:false
        }
      ]
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
      <div className="task-module">
        <div className="task-module_block">
          <div className="task-module_block_line">
            <div className="name-block">
              <h2>Задачи модуля</h2>
            </div>
            <div className="rectangle-block">
              <img src={rectangle} alt=""/>
            </div>
          </div>
          <div className="task-module_block_text">

            {this.state.taskList.map((item, index) => (
              <div className="task-module_block_text_item" key={index}>
                <div className="task-module_block_text_item_first">
                  <div className="number-block">
                    <span>{item.id}</span>
                  </div>
                  <div className="text-block">
                    {item.text}
                  </div>
                </div>
                <div className="checkbox-block">

                </div>
              </div>
            ))}

          </div>

          <div className="right-side-block">
            <div className="item">
              <img src="" alt=""/>
            </div>
            <div className="item">
              <img src="" alt=""/>
            </div>
            <div className="item">
              <img src="" alt=""/>
            </div>
            <div className="item">
              <img src="" alt=""/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default TaskModule;
