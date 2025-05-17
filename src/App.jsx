import './App.css'
import logo from '/logo.png'

function App() {
  return (
    <div className="container">
      <img src={logo} alt="GraphIntel Logo" className="logo" />
      <h1>Intelligent Reasoning Systems</h1>
      <p>
        We build intelligent systems by leveraging the best tools in the market and develop reasoning-based solutions with the core architecture of knowledge graphs.
      </p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Join Waitlist</button>
      </form>
      <footer>© 2025 GraphIntel.AI. All rights reserved.</footer>
    </div>
  )
}

export default App