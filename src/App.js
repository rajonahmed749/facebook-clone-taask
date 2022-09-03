import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="">
      <Header />
      <div className='app-body'>
        <Sidebar/>
        <Feed/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
