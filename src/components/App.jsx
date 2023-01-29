import React from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Box } from './App.styled';
 export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandlClick = propName => {
  
    this.setState(prevState =>
      ({[propName.target.name]: prevState[propName.target.name] + 1
      
    }));
  };
  countTotal = () => this.state.good + this.state.bad + this.state.neutral;

  countPositivFeedbeack = () =>
    ((this.state.good / this.countTotal()) * 100).toFixed(0);
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <Box>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onHandlClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotal() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotal()}
              positivePercentage={this.countPositivFeedbeack()}
            />
          )}
        
        </Section>
      </Box>
    );
  }
}

