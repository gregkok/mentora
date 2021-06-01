import classes from './Login.module.scss';

function Login() {
    return (
        <form className={classes.loginForm}>
            <h1>Login</h1>
            <div>
                <label>Username</label>
            </div>
            <div>
                <input className={classes.formInputMaterial} type="text" name="username" id="username" placeholder="Enter your username" autocomplete="off"/>
            </div>
            <div>
                <label>Password</label>
            </div>
            <div>
                <input className={classes.formInputMaterial} type="password" name="password" id="password" placeholder="Enter your pwd" autocomplete="off"/>
            </div>
            <button className={classes.btn}>Login</button>
        </form>
    )
}

export default Login;