import { useEffect, useState } from 'react';
let globalState = {};
let listeners: any = [];
let actions: any = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIndentifier: any) => {
    const newState = actions[actionIndentifier](globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li: any) => li !== setState);
    };
  }, [setState]);
  return [globalState, dispatch];
};

export const initStore = (userActions: any, initialState: any) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
