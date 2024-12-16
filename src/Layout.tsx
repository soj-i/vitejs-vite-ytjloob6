import { ReactNode } from 'react';
import Header from './Header';

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
