import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import UsersList from './UsersList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UsersList/>
    </>
  )
}

export default App
