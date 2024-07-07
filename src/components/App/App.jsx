import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";
import s from "./App.module.css"

export default function App() {
  const [feedback, setFeedback] = useState(() => {

    const savedFeedbacks = JSON.parse(window.localStorage.getItem("feedback"));

    if (savedFeedbacks !== null) {
      return savedFeedbacks;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });


  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback))
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  // const averageFeedback = Math.round((good / totalFeedback) * 100)

  return (
    <div className={s.container}>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback} />

      {totalFeedback ?
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          averageFeedback={Math.round((feedback.good / totalFeedback) * 100)}
        /> :
        <Notification />
      }
    </div>
  )
}



