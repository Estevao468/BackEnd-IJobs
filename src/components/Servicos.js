import Produto from "./Produto";
import '../global.css';

function Catalogo(props){

    var servico = [];

            for(let x=0; x<props.servico.length; x++){
                servico.push(<Produto servico={props.servico[x]}/>);
    }

    return(
        <div className="catalogo5">
            {servico}
            {servico}
            {servico}
            {servico}
            {servico}
            {servico}
            {servico}
            {servico}
            {servico}
            {servico}
            {servico}
            {servico}
            {servico}
            {servico}
        </div>
        
    );
}

export default Catalogo;