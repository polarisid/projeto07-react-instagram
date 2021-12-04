export default function Story(prop){
    return(
    <div class="story">
        <div class="imagem">
            <img src={prop.pic} />
        </div>
        <div class="usuario">
            {prop.username}
        </div>
    </div>
    )
}