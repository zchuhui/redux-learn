/**
 * create article
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addArticle } from '../../actions/index'
import './CreateArticle.css'


class CreateArticle extends Component {

  // init state
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  /**
   * input title
   */
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }


  /**
   * submit form
   */
  handleSubmit = (event) => {
    event.preventDefault();

    const { title } = this.state;
    const id = Math.random();
    this.props.addArticle({ title, id });
    this.setState({ title: "" })
  }


  /**
   * render component
   */
  render() {

    const { title } = this.state;

    return (
      <div className="CreateArt-wrap">
        <form onSubmit={this.handleSubmit}>
          <div className="CreateArt-form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="CreateArt-form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="CreateArt-save">
            Add Article
          </button>
        </form>
      </div>);
  }
}



/**
 * store return the actions
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}


/**
 * connect store to this component
 */
export default connect(null, mapDispatchToProps)(CreateArticle);