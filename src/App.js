
import './App.css';
import BluePage from './components/bluePage/BluePage';
import RedPage from './components/redPage/RedPage';
import Clicker from './components/functional_comp/Functional_comp';
function App() {
  const user = {
    name : "Anna",
    age : "19"
  }
  return (
    <div className="App">
      <> 
        <RedPage title={user}/>
        <BluePage title={user}/>
        <Clicker/>
      </>
    </div>
  );
}

export default App;
