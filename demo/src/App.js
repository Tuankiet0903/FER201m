
import './App.css';
import Company from './component/Company';
import Counter from './component/Counter';
import Hello from './component/Hello';

function App() {

  return (
    
    <div className="App">
         <Hello name="Kietnehihi"/>
         <Counter/>
        <Company value="0"/>
    </div>
  );
}

export default App;
