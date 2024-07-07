import s from "./Feedback.module.css"

export default function Feedback({ feedback, totalFeedback, averageFeedback }) {

    return (
        <ul className={s.container}>
            <li className={s.good}>Good: {feedback.good}</li>
            <li className={s.neutral}>Neutral: {feedback.neutral}</li>
            <li className={s.bad}>Bad: {feedback.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {averageFeedback}%</li>
        </ul>
    )
}
