export default function Login() {
    return (
      <div style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETDorlhqdFojYH2IsRsgVhGf0plNNHXENzpkRkY5KEFnjvMs_KzRdxvc&s')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',           // White text
        padding: '20px',         // Padding to make the footer bigger
        textAlign: 'center',     // Center align text
        fontSize: '1.1rem',      // Bigger font size
      }}>
        <h1>Login Page</h1>
        <form>
          {/* Yahan login form elements daalo */}
          <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email"required></input><br></br><br />
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" name="password"required></input><br></br>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  