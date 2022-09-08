
import '../global.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="App">
      <div className="container">
            <div className="container-login">
                <div className="warp-login">
                    <form className="login-form" align="left">
                        <div className="form-group">
                        <span className="login-form-title"><b>Login</b><p/></span>
                            <label htmlFor="nickName">Email<p/></label>
                            <input   
                                type="email" 
                                className="form-control"
                                id="nickName" />
                        </div>
                        <p/>
                        <div className="form-group">
                            <label htmlFor="password">Password<p/></label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password"/>
                        </div>
                        <p/>
                        <div className="login-form-btn">
                        <button type="submit" className="form-btn">Entrar</button>
                        </div>
                        <p/>
                        <div className="text-center">
                            <span className="txt1">Ainda não possui conta? </span>
                            <a className="txt2"><Link to='/cadastro'>Cadastre-se</Link></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;