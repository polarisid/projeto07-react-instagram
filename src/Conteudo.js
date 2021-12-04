import Post from './components/Post';
import Story from './components/Story';
import Sugestao from './components/Sugestao';
import User from './components/User';

const storys =[
    {pic:"assets/img/9gag.svg" , username :"9gag"},
    {pic :"assets/img/meowed.svg" , username :"meowed"},
    {pic : "assets/img/barked.svg" , username :"barked"},
    {pic : "assets/img/nathanwpylestrangeplanet.svg" , username :"nathanwpylestrangeplanet"},
    {pic : "assets/img/respondeai.svg" , username :"respondeai"},
    {pic : "assets/img/filomoderna.svg" , username :"filomoderna"},
    {pic : "assets/img/memeriagourmet.svg" , username :"memeriagourmet"},
]
const posts =[
    {
        profileName:"meowed",
        profilePic:"assets/img/meowed.svg",
        postPic:"assets/img/gato-telefone.svg",
        lastPeopleLikeName:"respondeai",
        lastPeopleLikePic:"assets/img/respondeai.svg",
        likesCount: 101523
    },
    {
        profileName:"barked",
        profilePic:"assets/img/barked.svg",
        postPic:"assets/img/dog.svg",
        lastPeopleLikeName:"adorable_animals",
        lastPeopleLikePic:"assets/img/adorable_animals.svg",
        likesCount: 99159
    },
]
const recomendados =[
    {profilePic:"assets/img/bad.vibes.memes.svg", nameID:"bad.vibes.memes" , reason:"Segue você"},
    {profilePic:"assets/img/chibirdart.svg", nameID:"chibirdart" , reason:"Segue você"},
    {profilePic:"assets/img/razoesparaacreditar.svg", nameID:"razoesparaacreditar" , reason:"Novo no Instagram"},
    {profilePic:"assets/img/adorable_animals.svg", nameID:"adorable_animals" , reason:"Segue você"},
    {profilePic:"assets/img/smallcutecats.svg", nameID:"smallcutecats" , reason:"Segue você"},

    
]

export default function Conteudo(){
    return(
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    {storys.map(nome =>  <Story pic ={nome.pic}  username ={nome.username}/>)}
                    <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
            <div class="posts">
                    {posts.map(nome =>  <Post pName ={nome.profileName}  pPic ={nome.profilePic} postPic ={nome.postPic} lastPeopleLikeName = {nome.lastPeopleLikeName} lastPeopleLikePic= {nome.lastPeopleLikePic} likesCount={nome.likesCount}/>)}
            </div>
            </div>

            <div class="sidebar">
                <User username="Catana" userId="catanacomics" userPic="assets/img/catanacomics.svg"/>
            <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>
                    {recomendados.map(nome =>  <Sugestao pic ={nome.profilePic}  username ={nome.nameID} reason = {nome.reason}/>)}
            </div>

            <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
            </div>
      </div>
    )
}

