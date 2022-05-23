import {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [cells, setCells] = useState([...Array(9).keys()])
  const [flag, setFlag] = useState(false)

  const results=[
    [1,2,3],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  
  const handleClick=(i)=>{
    let newData=[...cells]
    flag ? newData[i]='O' : newData[i]='X';
    // if(!flag){
    //   newData[i]='X'
    // } else {
    //   newData[i]='O'  
    // }
    setCells(newData)
    setFlag(!flag)
  }
  return (
    <div className="container">
      <div className='row'>
      {cells.map((i, ind)=>{
        return(
          <div className='col-sm-4 box' onClick={()=>handleClick(ind)}>
            {i}
            </div>
        )
      })
    }
      </div>
    </div>
  );
}

export default App;
