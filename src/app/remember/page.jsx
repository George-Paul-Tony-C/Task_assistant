

import { Render } from './server';

export default async function Remember() {
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-100 p-12 overflow-auto grid grid-cols-2 gap-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-black font-bold text-3xl">Remember Page</h2>
        </div>
        <p className="max-w-sm text-gray-600 text-md mb-4">
        </p>
        <Render/>
      </div>
    </>
  );
}
