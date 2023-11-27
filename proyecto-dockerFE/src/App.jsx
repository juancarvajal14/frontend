import { useEffect, useState } from 'react'
import getBackends from './helper/getBackend';
import postBackends from './helper/postBackend';

const App = () => {

  const [backends, setBackends] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    get();
  }, []);

  const get = async () =>{
    const newBackends = await getBackends();
    //getBackends().then((newBackends)=>{
    setBackends(newBackends);
    //});
  };

  const handler = (e)=> {
    e.preventDefault();
    postBackends(name).then(()=>{

    })
  }

  const recharge = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h4 className="title">Nombres</h4>
      <br />
      <input className="input" name='name' value={name} onChange={(e)=>setName(e.target.value)} />
      <button className="button" onClick={handler}>Agregar</button>
      <button className="button" onClick={recharge}>Recargar</button>
      <br />
      <br />
      <ul>
        {backends.map((backend)=>(
          <li key={backend.id}>{backend.name}</li>
        ))}
      </ul>
    </div>
  )
};

export default App