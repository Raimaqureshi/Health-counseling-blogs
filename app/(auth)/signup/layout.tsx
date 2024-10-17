export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header className="p-4 bg-blue-500 text-white">Signup Header</header>
            <main>{children}</main>
            <footer className="p-4 bg-blue-500 text-white">Signup Footer</footer>
        </div>
    );
}
