'use client';

import { BouldersProvider } from "@/app/reducers/BouldersContext";
import { Boulder } from "@/app/components/Boulder";

export default function BoulderPage({ params: { id } }) {
  return (
    <BouldersProvider>
      <Boulder id={id} />
    </ BouldersProvider>
  );
}