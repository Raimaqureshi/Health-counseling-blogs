export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header>Home Page Header</header>
        <main>{children}</main>
        <footer>Home Page Footer</footer>
      </div>
    );
  }
  