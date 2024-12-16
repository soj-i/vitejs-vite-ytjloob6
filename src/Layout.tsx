import { ReactNode } from 'react';
import Header from './MainHeader';

interface LayoutProps {
  // ReactElement
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header title="Recipe Step Tracker" />
      <main>{children}</main>
    </>
  );
}
