import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeekendPlanner from './pages/WeekendPlanner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeekendPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;
