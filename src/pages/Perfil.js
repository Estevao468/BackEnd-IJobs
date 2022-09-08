import '../global.css';

const Perfil = () => {
    return (
      <div className="App">
        <div className="container4">
          <div  className="container-form4">
            <div className="warp-login4">
              <form className="login-form4" align="left">
              <span className="form-title4"><b>Editar Perfil</b><p/></span>
                 <div className="form-group4">
                  <div className="input-box4"><label htmlFor="text">Nome de Usúario</label>
                      <input
                      type="name"
                      id="name"
                      className="form-control4"
                      required/>
                  </div>
                  <div className="input-box4">
                      <label htmlFor="email">Email</label>
                      <input
                      type="email"
                      id="email"
                      className="form-control4"
                      required/>
                  </div>
                  <div className="input-box4">
                      <label htmlFor="text">Categoria de Serviço</label>
                      <input
                      type="text"
                      id="text"
                      className="form-control4"
                      placeholder='Escolha uma categoria'
                      required/>
                  </div>
                  <div className="input-box4">
                      <label htmlFor="number">Telefone</label>
                      <input
                      type="number"
                      id="number"
                      className="form-control4"
                      placeholder='(99)99999-9999'
                      required/>
                  </div>
                  <div className="input-box4">
                      <label htmlFor="text">Descrição</label>
                      <input
                      type="text"
                      id="text"
                      className="form-control-14"
                      required/>
                      <label className="coment">Máx: 80 caracteres</label>
                  </div>  
                  <div className="input-box4">
                      <label htmlFor="password">Senha</label>
                      <input
                      type="password"
                      id="password"
                      className="form-control4"
                      required/>
                  </div>
                  <div className="input-box4">
                      <label htmlFor="Confirmpassword">Repita a Senha</label>
                      <input
                      type="password"
                      id="Confirmpassword"
                      className="form-control4"
                      required/>
                  </div>       
                  <div className="text-center4">
                     <div className="login-form-btn4">
                     <button type="submit" className="form-btn4">Cancelar</button>
                     <button type="submit" className="form-btn-14">Salvar alterações</button>
                  </div>
                 </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Perfil;