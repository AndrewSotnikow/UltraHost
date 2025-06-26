'use client';
export default function Error({ error }) {
  return <div className="p-6 text-red-600 text-center">Some error : {error.message}</div>;
}
