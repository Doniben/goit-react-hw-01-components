import { useState } from 'react';
import Wrapper from "components/Wrapper";
import Section from "components/Section";
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

function App() {
    const [stats, setStats] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const handleFeedback = type => setStats({ ...stats, [type]: stats[type] + 1 });

    const countTotalFeedback = () => {
        const { good, neutral, bad } = stats;
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const { good } = stats;
        return Math.round(good / countTotalFeedback() * 100) + '%';
    }

    return (
        <Wrapper>
            <Section title={'Please leave feedback'}>
                <FeedbackOptions
                    onLeaveFeedback = { handleFeedback }
                />
            </Section>

            <Section title={'Statistics'}>
                {countTotalFeedback() ? (
                    <Statistics
                        good={stats.good}
                        neutral={stats.neutral}
                        bad={stats.bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </Wrapper>
    )
}

export default App;