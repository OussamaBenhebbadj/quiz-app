import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Questions from './component/Questions'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
