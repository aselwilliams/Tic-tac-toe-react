import {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [cells, setCells] = useState([...Array(9).keys()])
  const [flag, setFlag] = useState(false)

  const handleClick=(i)=>{
    if(!flag){
      let newData=[...cells]
      newData[i]='X'
      setCells(newData)
    } else {
      let newData=[...cells]
      newData[i]='O'
      setCells(newData)
    }
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
