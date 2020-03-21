import React, { Component } from 'react'
import Movie from './components/Movie'
import Passing from './components/Passing'
import Top from './components/Top'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieItems: [],
      totalResults: 0,
      year: 1987,
      yearInputBox: '',
      yearDropBox: '',
      homeLink: 'Home',
      fetchURL: '',
    }
  }

  componentDidMount() {
    const fetchURL =
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=' +
      this.state.yearInputBox +
      '&sort_by=popularity.desc&api_key=e39bd4d7934850f869dcfd33c094d2bc'

    fetch(fetchURL)
      .then(response => {
        console.log('then-response' + response)
        return response.json()
      })
      .then(data => {
        console.log('then-data' + data)
        this.setState({
          movieItems: data.results,
          totalResults: data.total_results,
        })
      })
  }

  onChangeLinkName(newName) {
    this.state({
      homeLink: newName,
    })
  }

  updateYear = () => {
    this.setState({
      year: this.state.yearInputBox,
    })
    console.log('updateYear = ' + this.state.year)
    this.componentDidMount()
  }

  trackYear = e => {
    console.log(e.target.value)
    this.setState({
      yearInputBox: e.target.value,
    })
    console.log('trackYear = ' + this.state.year)
  }

  render() {
    return (
      <>
        <Top />
        <input onChange={this.trackYear} type="text" className="year-input" />
        <button className="update-year" onClick={this.updateYear}>
          Change year
        </button>

        <main>
          {this.state.movieItems.map(item => {
            return (
              <Movie
                original_title={item.original_title}
                poster_path={item.poster_path}
                overview={item.overview}
              />
            )
          })}
        </main>
        <Passing changeLink={this.onChangeLinkName.bind(this)} />
      </>
    )
  }
}

export default App
