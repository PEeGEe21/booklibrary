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
import Library from './pages/Library';
import Authors from './pages/Authors';
import Categories from './pages/Categories';
import BookDetail from './pages/BookDetail';
import AuthorDetail from './pages/AuthorDetail';
import CategoryDetail from './pages/CategoryDetail';
import Cart from './pages/Cart';
import BestSelling from './pages/BestSelling';
import AboutUs from './pages/AboutUs';
import Forum from './pages/Forum';
import Contact from './pages/Contact';

function App() {
  return (
    // return (
      <Router>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
                <Route exact path="/our-library" element={<Library/>} />
                <Route exact path="/authors" element={<Authors />}/>
                <Route exact path="/author/:name" element={<AuthorDetail />}/> 
                <Route path="/categories" element={<Categories />}>
                  <Route path=":id" element={<CategoryDetail/>}/>
                </Route>



                <Route exact path="/book/:id/:slug" element={<BookDetail />}/>
                {/* <Route exact path="/category/:category" element={<SingleCategory />}/> */}
                <Route exact path="/best-selling" element={<BestSelling />}/>
                <Route exact path="/cart" element={<Cart />}/>
                <Route exact path="/about-us" element={<AboutUs />}/>
                <Route exact path="/contact" element={<Contact />}/>
                <Route exact path="/forum" element={<Forum />}/>
                
            

                {/* <Route exact path="/search" component={Search} /> */}
                {/* <Route path="*" component={ErrorPage} /> */}
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
