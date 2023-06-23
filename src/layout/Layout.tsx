interface LayoutProps {
  children: string | JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return <main className="main">{children}</main>;
}

export default Layout;
