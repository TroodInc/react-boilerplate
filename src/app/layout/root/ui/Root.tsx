import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background text-foreground">
      <h1 className="text-2xl">
        Hello,{' '}
        <a
          href="https://trood.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold uppercase text-accent-foreground"
        >
          Trood
        </a>{' '}
        💙
      </h1>
      <Outlet />
    </div>
  );
}
