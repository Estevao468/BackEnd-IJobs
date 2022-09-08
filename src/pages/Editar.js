import '../global.css';

const Editar = () => {
  return (
    <div className="App">
      <div className="container2">
        <div  className="container-form2">
          <div className="warp-login2">
            <form className="login-form2" align="left">
            <span className="form-title2"><b>Editar Serviço</b><p/></span>
               <div className="form-group2">
                <div className="input-box2">
                    <label htmlFor="text">Nome</label>
                    <input
                    type="name"
                    id="name"
                    className="form-control2"
                    required/>
                </div>
                <div className="input-box2">
                    <label htmlFor="email">Descrição</label>
                    <input
                    type="email"
                    id="email"
                    className="form-control-12"
                    required/>
                    <label className="coment">Máx: 80 caracteres</label>
                </div>
                <div className="input-box2">
                    <label htmlFor="text">Valor:</label>
                    <input
                    type="name"
                    id="name"
                    className="form-control-22"
                    placeholder='R$ 00,00'
                    required/>
                </div>
                <div className="toggle2">
                <label className="wrg-toggle-check2">
                  <input type="checkbox"/>
                    <span className="slider2"/>
                </label>
                </div>
                <div className="legends2">
                    <span>Ativar serviço</span>
               </div>      
               <div className="toggle2">
                <label className="wrg-toggle-check2">
                  <input type="checkbox"/>
                    <span className="slider2"/>
                </label>
                </div>
                <div className="legends2">
                    <span>Permitir observaçoes</span>
               </div>           
                <div className="text-center2">
                   <div className="login-form-btn2">
                   <button type="submit" className="form-btn2">Cancelar</button>
                   <button type="submit" className="form-btn-12">Adicionar serviço ao painel</button>
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

export default Editar;
