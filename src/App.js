import './index.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Layout} from './pages/Layout';
import {Home} from './pages/Home';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
