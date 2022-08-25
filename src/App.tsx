import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<div className="App">Config husky again</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
