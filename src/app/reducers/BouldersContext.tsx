import { createContext, useContext, useReducer } from 'react';

const BouldersContext = createContext([]);
const BouldersDispatchContext = createContext(null);

export function BouldersProvider({ children }) {
  const [boulders, dispatch] = useReducer(
    bouldersReducer,
    initialBoulders
  );

  return (
    <BouldersContext.Provider value={boulders}>
      <BouldersDispatchContext.Provider
        value={dispatch}
      >
        {children}
      </BouldersDispatchContext.Provider>
    </BouldersContext.Provider>
  );
}

export function useBoulders() {
  return useContext(BouldersContext);
}

export function useBouldersDispatch() {
  return useContext(BouldersDispatchContext);
}

function bouldersReducer(boulders: Boulder[], action: Action) {
  switch (action.type) {
    case 'added': {
      return [...boulders, action.boulder];
    }
    case 'changed': {
      return boulders.map(boulder => {
        if (boulder.id === action.boulder.id) {
          return action.boulder;
        } else {
          return boulder;
        }
      });
    }
    case 'deleted': {
      return boulders.filter(boulder => boulder.id !== action.boulder.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialBoulders: Boulder[] = [
  { name: 'boulderA', grade: '7A', id: '1', holds: { 2: 3, 100: 2, 134: 1 } },
  { name: 'boulderB', grade: '6B', id: '2', holds: { 8: 3, 50: 2, 125: 2, 140: 1 } },
  { name: 'boulderC', grade: '5C', id: '3', holds: { 5: 3, 25: 2, 36: 2, 74: 2, 130: 1 } }
];
