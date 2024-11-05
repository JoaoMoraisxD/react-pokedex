import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import { ListPage } from './pages/list_page';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
