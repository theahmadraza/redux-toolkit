import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { newOrderCake } from './redux/action/cakeAction';


function App() {
  const dispatch = useDispatch()
  const cake = useSelector(state=>state.cake)
  const addCakeHandle = () => {
    dispatch({
      type:'ADD_CAKE',
      newOrder:1
    })
    }

    const removeCakeHandle = () => {
      dispatch({
        type:'REMOVE_CAKE',
        newOrder:1
      })
    }
  return (
    <div className="container">
      <div className='row vh-100 justify-content-center align-items-center'>
        <div className='col-6 rounded-3 bg-dark py-5 d-flex flex-column justify-content-center align-items-center'>
          <h1 className='text-white'>Order Cake Here!</h1>
          <h3 className='text-white'>{`Number of Cake ${cake.numOfCake}`}</h3>
          <div className='mt-5'>
        <button className='btn btn-primary' onClick={addCakeHandle}>Add Cake</button>
        { cake.numOfCake >= 1 && <button className='btn btn-primary ms-3' onClick={removeCakeHandle}>Remove Cake</button>}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
