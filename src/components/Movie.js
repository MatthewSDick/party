import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <article class="article">
        <h1 className="movie-name">{this.props.original_title}</h1>
        <section class="main-image">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.poster_path}`}
          />
        </section>
        <p className="plot">{this.props.overview}</p>
      </article>
    )
  }
}

export default Movie
