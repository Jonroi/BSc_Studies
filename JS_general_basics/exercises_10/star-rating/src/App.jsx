import './App.css';
import { ColorList } from './components/colorList/ColorList';

const initialColors = [
  {
    id: 1,
    title: "Ocean Blue",
    color: "#0077be",
    rating: 3
  },
  {
    id: 2,
    title: "Tomato Red",
    color: "#ff6347",
    rating: 2
  },
  {
    id: 3,
    title: "Lawn Green",
    color: "#7cfc00",
    rating: 4
  }
];

function App() {
  return (
    <div className="App">
      <ColorList colors={initialColors} />
    </div>
  );
}

export default App;
