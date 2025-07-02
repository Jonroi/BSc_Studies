import './App.css';
import { H2Header } from './components/header/h2header';
import UnorderedList from './components/list/unorderedList';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <H2Header />
        <UnorderedList />
      </header>
    </div>
  );
}

export default App;
