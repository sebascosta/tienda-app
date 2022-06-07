import NavBar from './components/NavBar.jsx';
import'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemCount from './components/ItemCount.jsx';

function App() {

  const onAdd = (count) => {
   alert(`Agregaste ${count} productos`)
  }

  return (
    <div >
      <NavBar />    
      <ItemListContainer /> 
      <ItemCount inicial={1} max={5} onAdd={onAdd} />
    </div>
    
  );
}

export default App;
