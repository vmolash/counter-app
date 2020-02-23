import React from 'react';
import './App.css';
import DeleteConfirmationModal from "./DeleteConfirmationModal";

function Counter(props) {
  return (
    <div className='card mb-2'>
        <div className="card-body">
            <div className="row">
                <div className="col">

      Counter ID <strong>{props.id}</strong>
                </div>
      <div className="col">Counter name <strong>{props.name}</strong></div>

                <div className="col">
        <button onClick={ () => props.decrement(props.id) } className='btn btn-primary'>-</button>
                <strong>{props.count}</strong>
        <button onClick={ () => props.increment(props.id) } className='btn btn-primary'>+</button>
                </div>

        <div className="col">
            {/*<button onClick={ () => props.remove(props.id) } className='btn btn-danger'  data-toggle="modal" data-target="#exampleModal">Delete</button>*/}
            <button onClick={<DeleteConfirmationModal/>} className='btn btn-danger'  data-toggle="modal" data-target="#exampleModal">Delete</button>
        </div>

            </div>
        </div>
    </div>
  );
}

export default Counter;
