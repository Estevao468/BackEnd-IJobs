import '../global.css';

const Servico = () => {
  return (
    <div className="App">
      <div className="container3">
        <div  className="container-form3">
          <div className="warp-login3">
            <form className="login-form3" align="left">
            <span className="form-title3"><b>Nome do Serviço</b><p/></span>
               <div className="form-group3">
                <div className="input-box3">
                    <label htmlFor="text">Nome</label>
                    <input
                    type="name"
                    id="name"
                    className="form-control3"
                    required/>
                </div>
                <div className="input-box3">
                    <label htmlFor="email">Descrição</label>
                    <input
                    type="email"
                    id="email"
                    className="form-control-13"
                    required/>
                    <label className="coment3">Máx: 80 caracteres</label>
                </div>
                <div className="input-box3">
                    <label htmlFor="text">Valor</label>
                    <input
                    type="name"
                    id="name"
                    className="form-control-23"
                    placeholder='R$ 00,00'
                    required/>
                </div>
                <div className="toggle3">
                <label className="wrg-toggle-check3">
                  <input type="checkbox"/>
                    <span className="slider3"/>
                </label>
                </div>
                <div className="legends3">
                    <span>Ativar serviço</span>
               </div>      
               <div className="toggle3">
                <label className="wrg-toggle-check3">
                  <input type="checkbox"/>
                    <span className="slider3"/>
                </label>
                </div>
                <div className="legends3">
                    <span>Permitir observaçoes</span>
               </div>                
                <div className="text-center3">
                   <div className="login-form-btn3">
                   <button type="submit" className="form-btn3">Cancelar</button>
                   <button type="submit" className="form-btn-13">Adicionar serviço ao painel</button>
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

export default Servico;