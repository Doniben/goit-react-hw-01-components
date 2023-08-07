import React, { Component } from 'react';
import { Wrapper, Section, FeedbackOptions, Statistics, Notification } from 'components/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = vote => {
    this.setState(prevState => ({
      [vote]: prevState[vote] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const { countTotalFeedback } = this;
    return Math.round((good / countTotalFeedback()) * 100) + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { handleFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;

    return (
      <Wrapper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={handleFeedback} />
        </Section>

        <Section title={'Statistics'}>
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrapper>
    );
  }
}

export default App;
