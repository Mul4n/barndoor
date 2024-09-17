'use client';

import { Boulder } from "@/app/components/Boulder";

export default function BoulderPage({ params: { id } }: { params: { id: string } }) {
  return (
    <Boulder id={id} />
  );
}