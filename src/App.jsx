import './App.css';
import { Analytics } from "@vercel/analytics/react";
import Desola from './components/desola';

function App() {
  return (
    <div className="App">
      <Analytics />
    <Desola />
    </div>
  );
}

export default App;
