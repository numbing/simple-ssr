import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header({ auth }) {
  console.log("my auth", auth);

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React SSR
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Header);
