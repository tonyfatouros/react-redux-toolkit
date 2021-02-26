import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useSelector(state => state.counter);      // count here is from initialState.count
                                                              // state.counter is from store.js -> reducer.counter
  const dispatch = useDispatch();
  return (
    <div className="App">
        <h1> The count is: { count }</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
    </div>
  );
}

export default App;
