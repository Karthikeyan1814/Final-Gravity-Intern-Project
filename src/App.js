import Nav from './components/Nav'
import './App.css';
import Container from "./components/Container"
import { useState ,useEffect} from 'react';
function App() {

  const [pname,setPname]=useState("");
  const [mrp,setMrp]=useState(0);
  const [triggred,SetTriggred]=useState(false);
  const [cardlist,setCardlist]=useState([]);

  const handle=(e)=>{
    e.preventDefault();
    SetTriggred(!triggred);
  }

  useEffect(() => {
    if (!pname || !mrp) return;

    const temp = {
      product: pname,
      maxprice: mrp
    };

    setCardlist(prev => [...prev, temp]);

    setPname("");
    setMrp("");
  }, [triggred]);

  return (
    <>
      <Nav />
        <header>
            <h1>
              Card Allocations in Dynamically
            </h1>
        </header>
        <div className='user'>
          <form onSubmit={handle}>
            <label>Enter the Product Name </label>
            <input id='f1' type='text' required value={pname} onChange={(e)=>setPname(e.target.value)}></input><br></br>
            <label>Enter the Maximum Retail Price</label>
            <input id='f2' type='number' required value={mrp} onChange={(e)=>setMrp(e.target.value)}></input><br></br>
            <button>Add To List</button>
          </form>
        </div>
          <div className='container'>
            {cardlist.map((value, index) => (
          <Container
            key={index}
            pname={value.product}
            mrp={value.maxprice}
          />
        ))}
        </div>
    </>
  );
}

export default App;
