
import './App.css';
import GoogleLogin from 'react-google-login';


function App() {

  const handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='section'>
          <div className='left-section'>
            <h1 className='logo-text'>Board.</h1>
          </div>
          <div className='right-section'>
            <div className='w-96'>
              <p className='sign-in'>Sign In</p>
              <p className='sign-in-line'>Sign in to your account</p>
              <div className='py-10'>
                {/* <button className='google-btn'>Sign in with google</button> */}

                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Log in with Google"
                  onSuccess={handleLogin}
                  onFailure={handleLogin}
                  cookiePolicy={'single_host_origin'}
                />
              </div>

              {/* <signin /> */}
              <div className='bg-gray-100 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-100  p-8 px-8 rounded-lg'>
                  <div className='flex flex-col text-black py-2'>
                    <label>Email address</label>
                    <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none ' type='text'></input>
                  </div>
                  <div className='flex flex-col text-black py-2'>
                    <label>Password</label>
                    <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none ' type='password'></input>
                  </div>
                  <div>
                    <a href='' className='text-blue-900'>forgot password?</a>
                  </div>
                  <button className='w-full my-5 py-2 bg-black text-white rounded-lg'>Sign In</button>
                  <div>
                    <p>Don't have an account? <a className='text-blue-900'>Register here</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
