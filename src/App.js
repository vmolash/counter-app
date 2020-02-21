import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";

function App() {
    const InitialCountersState = [
        { id: 123, name:'Counter 1', count: 2 },
        { id: 124, name:'Counter 2', count: 5 },
        { id: 125, name:'Counter 3', count: 8 },
        { id: 126, name:'Counter 4', count: 48 }
    ];

    const [counters, setCounters] = useState(InitialCountersState);

    const resetTotalCount = () => {
        console.log('Hello function');
        const newCounters = counters.map(el => ( {...el, count: 0} ) );
        setCounters(newCounters);
    };

    const increment = (id) => {
        console.log('inc ' + id);
        const index = counters.findIndex(el => el.id === id);
        const newCounts = [...counters];
            newCounts[index].count = newCounts[index].count + 1;
        setCounters(newCounts);
    };
    const decrement = (id) => {
        console.log('dec ' + id);
        const index = counters.findIndex(el => el.id === id);
        const newCounts = [...counters];

        newCounts[index].count = newCounts[index].count - 1;
        setCounters(newCounts);
    };

  return (
    <div>
        <h1>Counter</h1>
        Total: {counters.reduce((acc, cur) => acc + cur.count, 0)}
        <button onClick={resetTotalCount}>Reset total count</button>
        <hr/>
        {counters.map(el => <Counter key={el.id}
                                     id={el.id}
                                     name={el.name}
                                     count={el.count}
                                     increment={increment}
                                     decrement={decrement} />)}

    </div>
  );
}

export default App;
