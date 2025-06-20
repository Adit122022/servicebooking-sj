import { Suspense } from 'react';
import PaymentSuccessPage from './PaymentSuccessPage';

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading payment details...</div>}>
      <PaymentSuccessPage />
    </Suspense>
  );
}
