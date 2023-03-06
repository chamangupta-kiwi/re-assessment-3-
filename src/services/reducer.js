import { ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT, ADD_ITEM } from './constraints'

const initialState = {
  items: [
    {
      name: "Chaman",
      mobile: 987654321,
      id: '1'
    },
    {
      name: "Ayaan",
      mobile: 636526564,
      id: '2'
    }
  ]
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case DELETE_STUDENT:
      //console.log(action)
      return {
        ...state,
        items: state.items.filter((items) => items.id !== action.payload)
      };
    case ADD_STUDENT:

      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case UPDATE_STUDENT:
      console.log("====", action.payload, "reducers")
      return {
        ...state,
        items: state.items.map((items) => items.id === action.payload.id ? action.payload : items)
      }
    default:
      return state;
  }
}
export default studentReducer;

