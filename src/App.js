import './styles/App.css';
import Header from './jsx/Header.jsx';
import 'weather-icons/css/weather-icons.css';
import DataManageComponent from './jsx/DataManageComponent.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-body'>
        <DataManageComponent />
      </div>
    </div>
  );
}

export default App;
