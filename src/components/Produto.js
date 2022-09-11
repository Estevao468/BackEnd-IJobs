import '../global.css';

function Servico(props){
    return(
        <div className="produto5">
            <img src={props.servico.foto}/>
            <p className='text5'>{props.servico.nome}</p>
            <p className='text5'>R$ {props.servico.preco}</p>
            <p className='text5'>{props.servico.descricao}</p>
        </div>
    );
}

export default Servico;