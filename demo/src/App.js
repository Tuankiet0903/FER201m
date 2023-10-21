
import './App.css';
import Calculator from './component/Calculator';
import Company from './component/Company';
import Counter from './component/Counter';
import Hello from './component/Hello';
import Search from './component/Search';
import TodoList from './component/TodoList';

function App() {
  return (
    
    <div className="App">
         <Hello name="Kietnehihi"/>
         <Counter/>
        <Company value="0"/>
        <TodoList/>
        <Calculator/>
        <Search/>
    </div>
  );
}

export default App;
