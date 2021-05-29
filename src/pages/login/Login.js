import classes from './Login.module.scss';

function Login() {
    return (
        <form className={classes.loginForm}>
            <h1>Login</h1>
            <div>
                <input className={classes.formInputMaterial} type="text" name="username" id="username" placeholder=" " autocomplete="off"/>
                <label>Username</label>
            </div>
            <div>
                <input className={classes.formInputMaterial} type="password" name="password" id="password" placeholder=" " autocomplete="off"/>
                <label>Password</label>
            </div>
            <button className={classes.btn}>Login</button>
        </form>
    )
}

export default Login;