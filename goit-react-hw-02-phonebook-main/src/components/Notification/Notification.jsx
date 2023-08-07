import s from './Notification.module.css';

export const Notification = ({message}) => {
    return <p className={s.notification}>
        <i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;
        {message}
    </p>
}
