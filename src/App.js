import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';
import ProtectedRoute from './components/protected-route';
import SignUp from './components/sign-up';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Router>
            <Routes>
              {/* <Route path='/about'>About</Route> */}
              <Route
                path='/'
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
