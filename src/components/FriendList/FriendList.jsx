import FriendListItem from "../FriendListItem/FriendListItem"
import s from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    return (<ul className={s.list}>
        {friends.map(friend => (<li className={s.item} key={friend.id}>
            <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        </li>))}
    </ul>)
}

export default FriendList;