'use-client';
import { initStore } from './store';
import { fetchEventData } from '../api/services/Event';
import { useEffect } from 'react';

const configureEventStore: any = () => {
  const actions: any = {
    GET_EVENTS: () => {
      return;
    },
  };
  initStore(actions, fetchEventData());
};

export default configureEventStore;
