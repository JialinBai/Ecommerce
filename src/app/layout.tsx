// src/app/layout.tsx
import Layoutwrapper from './layoutwrapper';
import '../globals.css';

export default function Rootlayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className='bg-gray-100 text-black'>
        <Layoutwrapper>{children}</Layoutwrapper>
      </body>
    </html>
  );
}