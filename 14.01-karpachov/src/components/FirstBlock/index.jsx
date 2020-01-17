import React from 'react'
import './index.scss';
import checkItem from "./img/checkItem.svg";
import rightIcon1 from "./img/Vector.svg";
import rightIcon2 from "./img/Vector2.svg";
import rightIcon3 from "./img/Vector3.svg";
import rightIcon4 from "./img/Vector4.svg";
import rightIcon5 from "./img/Vector5.svg";

export default class FirstBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {taskList: []}
  }
  test(checked, index){
    const list = this.state.taskList
    list[index].selected = !checked
    this.setState({
      taskList: list
    })
  }
  componentDidMount() {
    this.setState({taskList: [
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
    ]})
  }

  render() {
    return (
      <div>
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

              <div className={'checkbox-block ' + (item.selected ? 'checked' : '')} onClick={() => this.test(item.selected, index)}>
                {item.selected ? (<img src={checkItem} alt=""/>) : ('')}
              </div>

            </div>
          ))}
        </div>

        <div className="right-side-block">
          <div className="item">
            <img src={rightIcon1} alt=""/>
          </div>
          <div className="item">
            <img src={rightIcon2} alt=""/>
          </div>
          <div className="item">
            <img src={rightIcon3} alt=""/>
          </div>
          <div className="item">
            <img src={rightIcon4} alt=""/>
          </div>
          <div className="item">
            <img src={rightIcon5} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}
