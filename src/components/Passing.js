import React, { Component } from 'react'

class Passing extends Component {
  state = {
    homeLink: 'Changed Link',
  }

  onChangeLink() {
    this.props.onChangeLink(this.state.homeLink)
  }

  render() {
    return (
      <div>
        <button on click={this.onChangeLink.bind(this)} className="btn-primary">
          Change header link
        </button>
      </div>
    )
  }
}

export default Passing
