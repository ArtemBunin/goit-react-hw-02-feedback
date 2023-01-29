import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
  return (
    <div>
      {options.map(option => (
        <FeedbackBtn type="button"
        key={option}
        onClick={onLeaveFeedback}
        name={option}
        >{option}</FeedbackBtn>
      ))}
    </div>
  );
};

FeedbackOptions.protoTypes={
    options: PropTypes.arrayOf(PropTypes.string).isRequired,

}