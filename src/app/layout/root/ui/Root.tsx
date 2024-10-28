import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className="min-h-dvh bg-primary-background text-primary-foreground">
      <Outlet />
    </div>
  );
}
