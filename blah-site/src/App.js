import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div className="App">
      <h1>Blah App</h1>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/post" element={ <PostPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
