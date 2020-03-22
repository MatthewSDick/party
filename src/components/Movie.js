import React, { Component } from 'react'
import { format, compareAsc } from 'date-fns'

class Movie extends Component {
  render() {
    // console.log(this.props.release)
    return (
      <article class="article">
        <h1 className="movie-name">{this.props.original_title}</h1>
        <h3 className="release-date">{this.props.release}</h3>
        <section class="main-image">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.poster_path}`}
            alt="Movie Poster"
          />
        </section>
        <p className="plot">{this.props.overview}</p>
      </article>
    )
  }
}

export default Movie

// release={format(new Date({item.release_date}), 'MM/dd/yyyy')}
