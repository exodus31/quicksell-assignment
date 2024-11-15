import {useMemo} from 'react';
import './usericon.css'

function UserIcon({ name, available }) {
    const text = useMemo(() => {    // creates user icon by extracting initials from user.name
        return name.split(" ").map((item) => item[0]).join("");
    }, [name]);

    return (
        <div className='usericon-container'>
            <div className='usericon-text'>{text.toUpperCase()}</div>
            <div className={`user-status ${available && "available"}`}></div>
        </div>
    );
}

export default UserIcon;
