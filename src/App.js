import './index.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Layout} from './pages/Layout';
import {Home} from './pages/Home';
import { ScientistDetail } from './pages/ScientistDetail/';
import { Books } from './pages/Books/';
import { Profile } from './pages/Profile';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';


function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route index path="/books" element={<Books/>} />
          <Route index path="/signup" element={<SignUp/>} />
          <Route index path="/signin" element={<SignIn/>} />
          <Route index path="/profile" element={<Profile/>} />
          <Route path="/scientist/:id" element={<ScientistDetail/>} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
