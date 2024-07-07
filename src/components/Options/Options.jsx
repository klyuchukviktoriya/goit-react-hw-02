import s from "./Options.module.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {

    return (

        <div className={s.container}>
            <button className={s.good} onClick={() => { updateFeedback("good") }}>Good<ThumbUpIcon /></button>
            <button className={s.neutral} onClick={() => { updateFeedback("neutral") }}>Neutral<SentimentNeutralIcon /></button>
            <button className={s.bad} onClick={() => { updateFeedback("bad") }}>Bad<ThumbDownIcon /></button>
            <button onClick={resetFeedback} disabled={totalFeedback === 0}>Reset</button>
        </div >
    )
}