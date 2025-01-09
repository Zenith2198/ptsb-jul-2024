import { useState } from 'react';
import './App.css'
import Login from './components/Login'
import UserProfile from './components/UserProfile';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ?
        <UserProfile onLogout={() => setLoggedIn(false)}></UserProfile>
      :
        <Login onLogin={() => setLoggedIn(true)}></Login>
      }
    </>
  )
}

export default App
