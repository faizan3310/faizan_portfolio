import { useReducer} from 'react';
import './useReducer.css'

let appGlobalState = {cartCountValue: 0};

function addReducer(state, action) {
    switch (action.type) {
        case 'add':
            return {cartCountValue: ++state.cartCountValue}
            break;
        case 'delete':
            return {cartCountValue: --state.cartCountValue}
            break;
    }
}
function ReducerDemo() {

    /**
     * useState variable cannot be access in another component, so we needs to go with useReducer()
     */

    const [state, dispatch] = useReducer(addReducer, appGlobalState);
    function handleAddItem() {
        dispatch({type: "add"});
    }

    function handleRemoveItem() {
        dispatch({type: "delete"});
    }

    return(
        <div>
            <h3>Demonstrating Reducer Data Sharing</h3>

            <div className="cartContent">
                Total Items in Cart - {state.cartCountValue} 
            </div>
            <hr/>

            <b>Action on Cart:</b>
            <br></br>
            <button className='btn btn-primary' onClick={handleAddItem}>Add Items to Cart</button>
            <button className='btn btn-secondary' onClick={handleRemoveItem}>Remove Items from Cart</button>

        </div>
    )
}

export default ReducerDemo;