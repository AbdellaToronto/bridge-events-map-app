import React from 'react';
import { Field, reduxForm } from 'redux-form';


function EventRatingForm({handleAddRating}) {
  return (
    <form onSubmit={ handleAddRating }>
      <div>
        <label><Field name="rating" component="input" type="radio" value="1"/>1</label>
        <label><Field name="rating" component="input" type="radio" value="2"/>2</label>
        <label><Field name="rating" component="input" type="radio" value="3"/>3</label>
        <label><Field name="rating" component="input" type="radio" value="4"/>4</label>
        <label><Field name="rating" component="input" type="radio" value="5"/>5</label>
      </div>
      <button type="submit">Rate this Event!</button>
    </form>
  );
}

EventRatingForm.propTypes = {
  handleAddRating: React.PropTypes.func,
};

export default reduxForm({ form: 'rating' })(EventRatingForm);
