'use client';
import { BouldersProvider } from './reducers/BouldersContext';
import { BouldersList } from './components/BouldersList';

export default function Home() {
  return (
    <BouldersProvider>
      <BouldersList />
    </BouldersProvider>
  );
}


