export default function Post(prop){
    return(
        <div class="post">
              <div class="topo">
                    <div class="usuario">
                        <img src={prop.pPic} />
                        {prop.pName}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
              </div>

              <div class="conteudo">
                    <img src={prop.postPic} />
              </div>

              <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={prop.lastPeopleLikePic} />
                        <div class="texto">
                            Curtido por <strong>{prop.lastPeopleLikeName}</strong> e <strong>outras {(prop.likesCount).toLocaleString('pt-BR')} pessoas</strong>
                        </div>
                    </div>
              </div>
            </div>

    )
}