import React, { Component } from 'react';
import List from "../components/articles/List";
import CreateArticle from "../components/articles/CreateArticle";


class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<div>
      <CreateArticle />
      <List />
    </div>);
  }
}

export default ArticlePage;