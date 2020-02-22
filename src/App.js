import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import AddCounterForm from "./AddCounterForm";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

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

    const incrementCounter = (id) => {
        console.log('inc ' + id);
        const index = counters.findIndex(el => el.id === id);
        const newCounters = [...counters];
        newCounters[index].count = newCounters[index].count + 1;
        setCounters(newCounters);
    };
    const decrementCounter = (id) => {
        console.log('dec ' + id);
        const newCounters = counters.map(el => {
            if(el.id === id) return {...el, count: el.count - 1 };
            return el;
        });
        setCounters(newCounters);
    };
    const removeCounter = (id) => {
        const newCounters = counters.filter(el => el.id !==id);
        setCounters(newCounters);
    };
    const addCounter = (name, count) => {
        const newCounter = [...counters, {
            id: Math.random(),
            name,
            count: Number(count)
        }];
        setCounters(newCounter);

    };

  return (
    <div className='container'>
        <h1>Counter</h1>
        Total: {counters.reduce((acc, cur) => acc + cur.count, 0)}
        <button onClick={resetTotalCount} className='btn btn-danger'>Reset total count</button>

        <hr/>
        {counters.map(el => <Counter key={el.id}
                                     id={el.id}
                                     name={el.name}
                                     count={el.count}
                                     increment={incrementCounter}
                                     decrement={decrementCounter}
                                     remove={removeCounter} />)}
        <AddCounterForm onSubmit={addCounter} />

    </div>
  );
}

export default App;
