export default function User(props){
    return(
        <div class="usuario">
            <img src={props.userPic} />
            <div class="texto">
                <strong>{props.userId}</strong>
                {props.username}
            </div>
        </div>
    )
}