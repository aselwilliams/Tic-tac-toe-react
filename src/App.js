import {useState,useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [cells, setCells] = useState([...Array(9).keys()])
  const [flag, setFlag] = useState(false);
  const [dataForX, setDataForX] = useState([])
  const [dataForO, setDataForO] = useState([])
  const [winner, setWinner] = useState('')

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
    // flag ? newData[i]='O' : newData[i]='X';
    if(!flag){
      newData[i]='X';
      setDataForX([...dataForX, i])
    } else {
      newData[i]='O' 
      setDataForO([...dataForO, i])

    }
    setCells(newData)
    setFlag(!flag)
  }

  useEffect(()=>{
for(let i of results){
  let joined=i.join('')
  if(dataForX.join('')===joined){
    console.log('X is a winner')
  } else if (dataForO.join('')===joined){
    console.log('O is a winner')
  }
}
  },[dataForO, dataForX])

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
      <div className='row'>
        <div className='col'>
          {winner}
        </div>
      </div>
    </div>
  );
}

export default App;
