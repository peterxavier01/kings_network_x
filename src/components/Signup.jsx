import React from "react";

const Signup = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <form className="signup-container">
      <div className="signup-flex">
        <div className="form-group mt-5">
            <label for="name" className="text-white">Email</label>
            <input
            type="email"
            className="form-control"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            />
            <p className="errorMsg text-white">{emailError}</p>
        </div>
        <div className="form-group">
            <label for="password" className="text-white">Password</label>
            <input
            type="password"
            className="form-control"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            />
            <p className="errorMsg text-white">{passwordError}</p>
        </div>
        <div className="btnContainer mb-4">
            {hasAccount ? (
                <>
                    <button onClick={handleLogin} type="submit" className="signup-btn">
                        Sign in
                    </button>
                    <p className="text-white">Don't have an account? <span className="signup-span" onClick={() => setHasAccount(!hasAccount)}>sign up</span></p>
                </>
            ) : (
                <>
                    <button onClick={handleSignup} type="submit" className="signup-btn">
                        Sign up
                    </button>
                    <p className="text-white">Have an account? <span className="signup-span" onClick={() => setHasAccount(!hasAccount)}>sign in</span></p>
                </>

            )}
        </div>
      </div>
    </form>
  );
};

export default Signup;
