import React from 'react';
import uniqueId from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {titleVal: '', bodyVal: '', done: false};

  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  handleTitleInput(event) {
    this.setState({titleVal: event.currentTarget.value});
  }

  handleBodyInput(event) {
    this.setState({bodyVal: event.currentTarget.value});
  }

  handleClick(event) {
    this.props.receiveTodo({id: uniqueId(), title: this.state.titleVal, body: this.state.bodyVal, done: this.state.done});
  }

  render() {
    return (
      <div>
        <label>Title:
          <input onInput = {this.handleTitleInput.bind(this)} type="text" value={this.state.titleVal} placeholder="to the window"></input>
        </label>
        <label>Body:
          <textarea onChange = {this.handleBodyInput.bind(this)} rows = "6" value={this.state.bodyVal}></textarea>
        </label>
        <button onClick={this.handleClick.bind(this)}>Create Todo!</button>
      </div>
    );
  }
}

export default TodoForm;
