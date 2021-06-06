import classes from './Login.module.scss';

function Login() {

    function callBackend(event) {
        event.preventDefault();
        console.log('You clicked submit.');


        fetch("https://mentora-backend.herokuapp.com/test")
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            
          }
        )

    }

    return (
        <form method="GET" onSubmit={callBackend} className={classes.loginForm}>
            <h1>Login</h1>
            <div>
                <label>Username</label>
            </div>
            <div>
                <input className={classes.formInputMaterial} type="text" name="username" id="username" placeholder="Enter your username"/>
            </div>
            <div>
                <label>Password</label>
            </div>
            <div>
                <input className={classes.formInputMaterial} type="password" name="password" id="password" placeholder="Enter your pwd"/>
            </div>
            <button type="submit" className={classes.btn}>Login</button>
        </form>
    )
}

export default Login;