import logo from './logo.svg';
import {BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Button } from '@mui/material';
import ShowLoginDialog from './components/login';
import HomePage from './components/homePage';
import AdminUserPage from './components/adminUserPage';
import EndUserPage from './components/endUserPage';
import MorePhotoDetails from './components/morePhotoDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
          <header>
              <Box>
                  <Grid container spacing={2}>
                    <Grid size={2}>
                        logo
                    </Grid>
                    <Grid size={8}>
                        LensCraft
                    </Grid>
                    <Grid size={2}>
                        <ShowLoginDialog></ShowLoginDialog> 
                    </Grid>
                  </Grid>
              </Box>
          </header>

          <main>
            <Routes>
                <Route path='/' element={<HomePage></HomePage>}></Route>
                <Route path='/adminUser' element={<AdminUserPage></AdminUserPage>}></Route>
                <Route path='/userPage' element={<EndUserPage></EndUserPage>}></Route>
                <Route path='/moreDetails/:photoId' element={<MorePhotoDetails></MorePhotoDetails>}></Route>
            </Routes>
          </main>

          <footer></footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
