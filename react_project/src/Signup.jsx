import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className="hero">
      <div className={`container ${isRightPanelActive ? "right-panal-active" : ""}`} id="main">
        {/* Sign-Up Form */}
        <div className="sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social"></div>
            <p>Or use your email for registration</p>
            <input type="text" name="username" placeholder="username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="password" required />
            <button>Sign Up</button>
          </form>
        </div>

        {/* Sign-In Form */}
        <div className="sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social"></div>
            <p>Or use your Account</p>
            <input type="email" name="email" placeholder="Email" required />
            <br />
            <input type="password" name="password" placeholder="password" required />
            <a href="#">Forget your Password?</a>
            <button>Sign In</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button id="signin" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button id="signup" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
