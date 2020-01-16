import React, { Component } from 'react';
import ExampleComponent from './components/ExampleComponent';

const fieldSize = [10, 5]

export default class App extends React.Component {
    // осуществляем проверку (на колличество подряд идущих одинаковы элементов равно числу, означающее выигращную последовательность)
    // только после хода (ход -> проверка -> количестов подряд идущих символов === n ? выиграл : не выиграл)
    // начало проверки - текущий ход
  state = {
    fields: [],
    cellSize: {
      width: window.innerWidth/fieldSize[0],
      height: window.innerHeight/fieldSize[1]
    }
  }
  
  componentDidMount() {
    // create multidimensional array with empty elements
    const [width, height] = fieldSize;
    this.setState({
      fields: this.generateEmptyArray(height, width)
    })
    document.addEventListener("mousewheel", this.onScroll, false);
  }

  generateEmptyArray = (height, width) => {
    return Array.from(
         new Array(Math.floor(height)), () => Array.from(new Array(Math.floor(width)), () => false)
      )
  }

  handleCellClick = e => {
    const element = e.target;
    if (element.tagName.toLowerCase() !== 'td') return;
    console.dir(element.dataset.index);
  }
  
  onScroll = (e) => {
    console.log(e)
  }
  
  render() {
    const {
      fields,
      cellSize: { width, height }
    } = this.state;
    console.log('', this.state);
    return(
      <table className="field">
        <tbody onClick={this.handleCellClick}>
          {fields.map( 
            (rows, rowIdx) => (
              <tr
                className="row"
                style={{height: height + 'px'}}
                key={rowIdx}
               >
                {rows.map(
                  (value, cellIdx) => {
                    const param = rowIdx + '_' + cellIdx;
                    return (
                      <td
                        className="cell"
                        style={{width: width + 'px'}}
                        data-index={param}
                        key={param}
                       >
                        {value ? value : ''}
                      </td>
                  )}
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    );
  }
}



// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                <ExampleComponent />
//             </div>
//         )
//     }
// }
