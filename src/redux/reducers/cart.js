const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItem = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItem,
          totalPrice: getTotalPrice(currentPizzaItem),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizza = [].concat.apply([], items);

      const totalPrice = getTotalPrice(allPizza);

      return {
        ...state,
        items: newItems,
        totalCount: allPizza.length,
        totalPrice: totalPrice,
      };
    }

    default:
      return state;
  }
};
export default cart;
