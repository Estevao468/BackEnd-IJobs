import '../global.css';

const Cadastro = () => {
  return (
    <div className="App">
      <div className="container1">
        <div  className="container-form1"> 
          <div className="warp-login1">
            <form className="login-form1" align="left"> 
            <span className="form-title1"><b>Cadastro</b><p/></span>
               <div className="form-group1">
                <div className="input-box1">
                    <label htmlFor="text">Nome de Úsuario</label>
                    <input
                    type="name"
                    id="name"
                    className="form-control1"
                    required/>
                </div>
                <div className="input-box1">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    className="form-control1"
                    required/>
                </div>
              </div>
              <div className="form-group1">
                <div className="input-box1">
                    <label htmlFor="password">Senha</label>
                    <input
                    type="password"
                    id="password"
                    className="form-control1"
                    required/>
                </div>
                <div className="input-box1">
                    <label htmlFor="Confirmpassword">Repita a Senha</label>
                    <input
                    type="password"
                    id="Confirmpassword"
                    className="form-control1"
                    required/>
                </div>
              </div>
              <div className="form-group1">
                <div className="input-box1">
                    <label htmlFor="text">Categoria de Serviço</label>
                    <input
                    type="text"
                    id="text"
                    className="form-control1"
                    placeholder='Escolha uma categoria'
                    required/>
                </div>
                <div className="input-box1">
                    <label htmlFor="number">Telefone</label>
                    <input
                    type="number"
                    id="number"
                    className="form-control1"
                    placeholder='(99)99999-9999'
                    required/>
                </div>
              </div>
              <div className="form-group1">
                <div className="input-box1">
                    <label htmlFor="text">Estado</label>
                    <input
                    type="text"
                    id="text"
                    className="form-control1"
                    required/>
                </div>
                <div className="input-box1">
                    <label htmlFor="text">Cidade</label>
                    <input
                    type="text"
                    id="text"
                    className="form-control1"
                    required/>
                </div>
              </div>
              <div className="form-group1">
                <div className="input-box1">
                    <label htmlFor="text">Descrição</label>
                    <input
                    type="text"
                    id="text"
                    className="form-control-des1"/>
                </div>
              </div>
              <div className="login-form-btn1">
                <button type="submit" className="form-btn1">Cadastrar</button>
             </div>
              <div className="text-center1">
                <span className="txt1-1">Ainda não possui conta? </span>
                <a className="txt2-1" href="./Home">Cadastre-se</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;