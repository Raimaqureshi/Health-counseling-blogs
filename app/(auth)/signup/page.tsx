export default function Signup() {
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
      <h1>Create Account</h1>
      <p>Enter your Name E-mail and password to Signup</p>
      <form>
        {/* Yahan signup form elements daalo */}
        <label>First Name: </label>
        <input type="text" /><br /><br />
        <label>Last Name: </label>
        <input type="text" /><br /><br />
        <label>Email: </label>
        <input type="email" /><br /><br />
        <label>Password: </label>
        <input type="password" /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
