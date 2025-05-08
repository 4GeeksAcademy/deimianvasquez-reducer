export const initialStore = () => {
  return {
    message: "deimian",
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    favorites: [
      "deimian"
    ]
  }
}

/*
  action {
    type:"ADD_FAVORITES",
    payload: "Juanita"
  }

*/

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case "ADD_FAVORITES":
      return{
        ...store,
        favorites: [...store.favorites, action.payload || "Juanita"]
      }

    default:
      // throw Error('Unknown action.');
      return store
  }
}
