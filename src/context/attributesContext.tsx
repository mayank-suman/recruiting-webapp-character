import { createContext, PropsWithChildren, useReducer } from "react";
import { ATTRIBUTE_LIST } from "../consts";
import { AttributesContextType, DerivedAttributes } from "../types";

export const AttributesContext = createContext<AttributesContextType | null>(
  null
);

const reducer = (state: DerivedAttributes[], action) => {
  switch (action.type) {
    case "increment":
      return state.map((attribute) => {
        if (attribute.id === action.id) {
          return { ...attribute, value: attribute.value + 1 };
        }
        return attribute;
      });
    case "decrement":
      return state.map((attribute) => {
        if (attribute.id === action.id) {
          return { ...attribute, value: attribute.value - 1 };
        }
        return attribute;
      });
    default:
      return state;
  }
};

const getInitialValue = (list: string[]) =>
  list.map((attribute, index) => ({
    id: index,
    label: attribute,
    value: 9,
  }));

function AttributesProvider({ children }: PropsWithChildren) {
  const [attributes, dispatch] = useReducer(
    reducer,
    ATTRIBUTE_LIST,
    getInitialValue
  );
  const increment = (id: number) => dispatch({ type: "increment", id });
  const decrement = (id: number) => dispatch({ type: "decrement", id });

  return (
    <AttributesContext.Provider value={{ attributes, increment, decrement }}>
      {children}
    </AttributesContext.Provider>
  );
}

export default AttributesProvider;
