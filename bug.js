```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
export default App;
```
This code uses `react-router-dom` v6.  A common error is forgetting to wrap the routes with `Routes` and `BrowserRouter`.  Another subtle issue can happen if you're trying to nest routes incorrectly.  For instance, putting a `Route` inside another `Route`'s element without using nested `<Routes>` can lead to unexpected routing behavior.