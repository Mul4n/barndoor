import { createContext, useContext, useReducer } from 'react';

const BouldersContext = createContext(null);
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

function bouldersReducer(boulders, action) {
  switch (action.type) {
    case 'added': {
      return [...boulders, {
        id: action.id,
        boulder: action.boulder
      }];
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
      return boulders.filter(boulder => boulder.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialBoulders = [
  { name: 'boulderA', grade: '7A', id: '1', holds: { 2: 'hand', 100: 'start', 134: 'end' } },
  { name: 'boulderB', grade: '6B', id: '2' },
  { name: 'boulderC', grade: '5C', id: '3' }
];
