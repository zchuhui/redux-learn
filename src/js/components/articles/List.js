import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import './List.css'

class List extends Component {
  state = {}
  render() {

    const articles = this.props.articles

    return (
      <div className="List-wrap">
        <h2>Article List</h2>
        <ul className="List-ul">
          {
            articles.map((el, index) => (
              <li key={el.id} className="List-Item">{index}. &nbsp; {el.title}</li>
            ))
          }
        </ul>
      </div>);
  }
}

// data type check
List.propTypes = {
  articles: PropTypes.array              // article list, array type
}

// state
const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

// 'connect' use links store
export default connect(mapStateToProps)(List);