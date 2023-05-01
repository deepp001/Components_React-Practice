import produce from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
const INCREMENT = "increment";
const DECREMENT = "decrement";
const VALUETOADD = "valueToAdd";
const ADDING_VALUE_TO_COUNT = "Adding-Value-To-Count";
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      state.count = state.count + 1;
      return;

    case DECREMENT:
      state.count = state.count - 1;
      return;

    case VALUETOADD:
      state.valueToAdd = action.payload;
      return;
    case ADDING_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;

    default:
      return state;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);
  const increment = () => {
    dispatch({
      type: INCREMENT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: VALUETOADD,
      payload: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADDING_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">count is {state.count}</h1>
      <div className="flex">
        <Button onClick={decrement}>decrement</Button>
        <Button onClick={increment}>increment</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a Lot</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button type="submit">add It!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
