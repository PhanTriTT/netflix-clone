import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import Protected from './components/Protected'

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route
              path='/account'
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  )
}

export default App
