import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

function App() {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={isLoggedIn ? <Profile /> : <Navigate to='/signin' />}
          />
          <Route
            path='signin'
            element={!isLoggedIn ? <SignIn /> : <Navigate to='/' />}
          />
        </Routes>
      </BrowserRouter>
      <div>hi</div>
    </>
  );
}

export default App;
 