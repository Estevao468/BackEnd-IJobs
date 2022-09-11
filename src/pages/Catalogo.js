import '../global.css';
import Servico from '../components/Servicos';
import foto from '../img/logo.png';

class Servicos {
    constructor(nome, preco, descricao){
        this.foto = foto;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
   } 
}
var p1 = new Servicos('Nome do produto','Preço','Descrição');

var servico = [p1];

function Catalogo(){
    return(
        <div className="App5">
            <div className="container5">
                <div  className="container-form5">
                    <div className="warp-login5">
                        <form className="login-form5" align="left">
                            <span className="form-title5"><b>Catalogo de Serviços</b><p/></span>
                            <div classNme="form-group5">
                                <Servico servico={servico}/>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  );
}

export default Catalogo;