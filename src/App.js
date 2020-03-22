import React, { Component } from 'react'
import Movie from './components/Movie'
import Top from './components/Top'
import { format, compareAsc } from 'date-fns'

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
      sortBySelected: 'popularity',
      sortBy: 'popularity',
      releaseDate: '',
      formattedDate: '',
    }
  }

  componentDidMount() {
    const fetchURL =
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=' +
      this.state.year +
      '&sort_by=' +
      this.state.sortBy +
      '.desc&api_key=e39bd4d7934850f869dcfd33c094d2bc'

    fetch(fetchURL)
      .then(response => {
        // console.log('then-response' + response)
        return response.json()
      })
      .then(data => {
        data.results.sort(
          (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
        )
        // console.log('then-data' + data)
        this.setState({
          movieItems: data.results,
          totalResults: data.total_results,
        })
      })
  }

  updateYear = () => {
    this.setState(
      {
        year: this.state.yearInputBox,
      },
      // console.log('updateYear = ' + this.state.year)
      // this.componentDidMount()
      () => {
        this.componentDidMount()
      }
    )
  }

  trackYear = e => {
    // console.log(e.target.value)
    this.setState({
      yearInputBox: e.target.value,
    })
    // console.log('trackYear = ' + this.state.year)
  }

  trackYearDrop = e => {
    console.log('trackYearDrop ' + e.target.value)
    this.setState(
      {
        // sortBySelected: e.target.value,
        year: e.target.value,
      },
      () => {
        this.componentDidMount()
      }
    )
  }

  trackOrder = e => {
    this.setState(
      {
        // sortBySelected: e.target.value,
        sortBy: e.target.value,
      },
      () => {
        this.componentDidMount()
      }
    )
  }

  render() {
    return (
      <>
        <Top />
        <div className="pick-year">
          <input onChange={this.trackYear} type="text" className="year-input" />
          <button className="update-year" onClick={this.updateYear}>
            Change year
          </button>

          <select
            className="yearorder"
            id="year-order"
            // onChange={this.trackSort}
            onChange={e => this.trackYearDrop(e)}
            value={this.state.value}
          >
            <option value="1980">1980</option>
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
          </select>

          <p>Sort by</p>

          <select
            className="sortorder"
            id="sort-order"
            // onChange={this.trackSort}
            onChange={e => this.trackOrder(e)}
            value={this.state.value}
          >
            <option value="popularity">Popularity</option>
            <option value="release_date">Release Date</option>
          </select>
        </div>

        <main>
          {this.state.movieItems.map(item => {
            return (
              <Movie
                original_title={item.original_title}
                poster_path={item.poster_path}
                overview={item.overview}
                // release={item.release_date}
                release={format(new Date(item.release_date), 'MMM do yyyy')}
              />
            )
          })}
        </main>
      </>
    )
  }
}

export default App
