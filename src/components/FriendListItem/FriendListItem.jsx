import clsx from "clsx";
import s from "./FriendListItem.module.css"
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (<div className={s.item}>
        <img className={s.image} src={avatar} alt="Avatar" width="48" />
        <p className={s.name}>{name}</p>
        <p className={clsx(isOnline ? s.green : s.red, s.status)}>{isOnline ? "Online" : "Offline"}</p>
    </div>)


}

export default FriendListItem;