export default function Sugestao(prop){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={prop.pic} />
                <div class="texto">
                <div class="nome">{prop.username}</div>
                <div class="razao">{prop.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}