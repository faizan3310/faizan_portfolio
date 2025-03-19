import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Components/header';
import Electronics from './Components/electronics';
import Jewelery from './Components/jewelery';
import MensClothing from './Components/mensClothing';
import WomensClothing from './Components/womensClothing';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import PageNotFound from './Components/pageNotFound';
import MoreProductDetails from './Components/viewDetails';
import MoreInfoDetails from './Components/moreInfo';
import LoginPage from './Components/login';

function App() {
  
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() =>{
      axios.get("https://fakestoreapi.com/products/categories").then((response) => {
        console.log(response.data);
        setCategoryList(response.data);
      }).catch((error) => {
          console.log(error);
          console.log("Error while getting category data");
      })
    }, []);

  return (
    <div className="App">
        <BrowserRouter>
            <Header></Header>

            <div className='container-fluid'>
                <div className='row'>

                    <div className='col col-2' style={{'border-right': '2px solid blue', 'height': '1200px'}}>

                        <ul className='leftCategoryItems'>
                            {
                                categoryList.map((item) => (
                                    // <li>
                                    //     {item}
                                    // </li>
                                    <li>
                                      <Link to={item}>{item}</Link>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>

                    <div className='col col-9'>
                        <Routes>
                            <Route path='/' element={<Home></Home>}></Route>
                            <Route path='/electronics' element={<Electronics></Electronics>}></Route>
                            <Route path='/jewelery' element={<Jewelery></Jewelery>}></Route>
                            <Route path="/men's clothing" element={<MensClothing></MensClothing>}></Route>
                            <Route path="/women's clothing" element={<WomensClothing></WomensClothing>}></Route>

                            {/* <Route path="/view pdtDetails/:id/:price" element={<MoreProductDetails></MoreProductDetails>}>
                            </Route> */}

                            <Route path="/view pdtDetails/:id/:price" element={<MoreProductDetails></MoreProductDetails>}>
                                <Route path= "moreInfo/:id" element={<MoreInfoDetails></MoreInfoDetails>}></Route>
                            </Route>

                            <Route path="/login" element={<LoginPage></LoginPage>}></Route>

                            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>        
                            
                        </Routes>
                    </div>

                </div>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
