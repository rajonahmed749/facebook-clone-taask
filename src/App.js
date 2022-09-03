import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Header2 from './components/Header/Header2';
import Sidebar from './components/Sidebar/Sidebar';
import Widget from './components/Widget/Widget';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app-body'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
