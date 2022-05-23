import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import 'jquery/dist/jquery';
import '@fortawesome/fontawesome-free/css/all.css';

//PAGES
import Home from './pages/Home';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

function App() {
  return (
    // return (
      <Router>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />

                {/* <Route exact path="/" component={Home} /> */}
              </Routes>
      </Router>
                
    // <div className="App">
    //   <p className="underline text-8xl">Testinggg</p>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
