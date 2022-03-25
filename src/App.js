import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Accrodian from './Components/Acctodian/Accrodian';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Accrodian></Accrodian>
    </div>
  );
}

export default App;
