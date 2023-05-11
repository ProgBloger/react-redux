import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'React is ...',
    content: 'A good tool',
  },
  {
    title: 'Why to use',
    content: 'It is a fast building tool',
  },
  {
    title: 'How popular',
    content: 'Very',
  },
];

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
