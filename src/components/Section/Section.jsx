import PropTypes from 'prop-types';
import {FeedbackTitle} from './Section.styled'
export const Section=({title,children})=>{
     return (
        <> 
        <FeedbackTitle>{title}</FeedbackTitle>
        {children}
        </>
       
     )
}
Section.protoTypes={
    title:PropTypes.string.isRequired,
    children:PropTypes.element,
}