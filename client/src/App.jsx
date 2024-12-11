import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostCard from './components/PostCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostCard />} />
      </Routes>
    </Router>
  );
}

export default App;
