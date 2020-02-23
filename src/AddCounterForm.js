import React, {useState} from 'react';
import './App.css';

function AddCounterForm(props) {
    const [name, setName] = useState('----');
    const [count, setCount] = useState(45);

    const onSubmit = () => {
        props.onSubmit(name, Number(count));
        setName('');
        setCount(0);
    };

  return (
    <div className='row'>
        <div className="col">
        <input className='form-control' type="text" name='name' value={name} onChange={ e => setName(e.target.value)} />
        </div>
        <div className="col">
        <input className='form-control' type="number" name='count' value={count} onChange={ e => setCount(e.target.value)}/>
        </div>
        <div className="col">
      <button classNmae='btn btn-outline-secondary' onClick={ () => onSubmit(name, count)}>Create</button>
        </div>

    </div>
  );
}

export default AddCounterForm;
