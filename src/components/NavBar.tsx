import { Link } from "react-router-dom";
import { signOut } from "aws-amplify/auth"

export default function NavBar() {
  return (



    <nav style={styles.nav}>
      <Link to="/app" style={styles.link}>Home</Link>
      <Link to="/app2" style={styles.link}>app2</Link>

    </nav>

  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    background: "#f5f5f5",
    borderBottom: "1px solid #ddd",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  }
};
