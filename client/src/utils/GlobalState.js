import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_BOOK,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_BOOK:
    return {
      ...state,
      currentBook: action.book,
    };
  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.book, state.favorites],
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      books: [...state.books],
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((book) => {
        return book._id !== action._id;
      }),
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    books: [],
    currentBook: {
      _id: 0,
      title: "test",
      description: "test",
      href: "test",
      thumbnail: "test",
    },
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
