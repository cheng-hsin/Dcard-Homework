import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <main>
        <Route path='/scenicSpot' component={HomePage} />
      </main>
    </Router>
  );
}

export default App;
