import s from './Notification.module.css';

export const Notification = ({message}) => {
    return <p className={s.notification}> {message} </p>
}
