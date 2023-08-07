import s from './FeedbackOptions.module.css';
// import { FunctionalColorChangingButton, ClassColorChangingButton } from 'components/'

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return <div className={s.options}>
        <button className={s.options_button} onClick={() => onLeaveFeedback('good')}>Good</button>
        <button className={s.options_button} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button className={s.options_button} onClick={() => onLeaveFeedback('bad')}>Bad</button>
        {/* <ClassColorChangingButton />
        <FunctionalColorChangingButton /> */}
    </div>
}