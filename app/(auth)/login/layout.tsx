export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header className="p-4 bg-blue-500 text-white">Login Header</header>
        <main>{children}</main>
        <footer className="p-4 bg-blue-500 text-white">Login Footer</footer>
      </div>
    );
  }
  