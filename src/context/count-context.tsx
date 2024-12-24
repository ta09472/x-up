import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface Count {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const CountContext = createContext<Count>({
  count: 0,
  setCount: () => {},
});

interface Props {
  children: ReactNode;
  initial?: number;
}

export function CountContextProvider({ children, initial = 1 }: Props) {
  const [count, setCount] = useState(initial);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
