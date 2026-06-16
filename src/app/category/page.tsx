import React, { Suspense } from 'react';
import CategoryClient from './CategoryClient';

export default function Page() {
  return (
    <Suspense fallback={<div className="py-8">Carregando...</div>}>
      <CategoryClient />
    </Suspense>
  );
}
