import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class AddTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    let input;
    const { dispatch } = this.props;

    return (
        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }

          dispatch(addTodo(input.value));
          input.value = '';

        }}>

          <input ref={node => input = node} />
          <button type="submit">Add Todo</button>
        </form>
    );
  }
}

export default connect()(AddTodo)