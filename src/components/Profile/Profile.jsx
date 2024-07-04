import s from './Profile.module.css'
const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={s.profile}>
            <div className={s.main}>
                <img className={s.img} src={image}
                    alt="User avatar"
                />
                <p className={s.name}>{name}</p>
                <p className={s.info}>&#64;{tag}</p>
                <p className={s.info}>{location}</p>
            </div>

            <ul className={s.list}>
                <li className={s.listItem}>
                    <span className={s.stats}>Followers</span>
                    <span className={s.statsCounter}>{stats.followers}</span>
                </li>
                <li className={s.listItem}>
                    <span className={s.stats}>Views</span>
                    <span className={s.statsCounter}>{stats.views}</span>
                </li>
                <li className={s.listItem}>
                    <span className={s.stats}>Likes</span>
                    <span className={s.statsCounter}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;