import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      anekdoottienPisteet: [0, 0, 0, 0, 0, 0],
    }
  }

  seuraavaAnekdootti = () => {
    return () => {
      this.setState({
        selected: (Math.floor(6 * Math.random()))
      })
    }
  }

  paivitaPisteet = (tila) => {
    const kopio = [...tila.anekdoottienPisteet]
    return () => {

      kopio[tila.selected] += 1

      this.setState({
        anekdoottienPisteet: kopio
      })
    }
  }

    const kopio2 = [...this.state.anekdoottienPisteet]

    kopio2.sort(function (a, b) {
      return a - b;
    })

    const suurin = kopio2[kopio2.length - 1]

    const indeksi = this.state.anekdoottienPisteet.findIndex(suurinluku => suurinluku === suurin)
    const anekdoottiJollaEnitenAania = this.props.anecdotes[indeksi]

    console.log(anekdoottiJollaEnitenAania)

    return (
      <div>
        {anekdoottiJollaEnitenAania}
        <br></br>
        has {this.state.anekdoottienPisteet[indeksi]} votes
      </div>
    )
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {this.props.anecdotes[this.state.selected]}
          </div>

          <div>
            has {this.state.anekdoottienPisteet[this.state.selected]} votes
          </div>


          <Button handleClick={this.seuraavaAnekdootti()}
            text="next anecdote"
          ></Button>

          <Button handleClick={this.paivitaPisteet(this.state)}
            text="vote"
          ></Button>

          <h1>anecdote with most votes</h1>

          {this.enitenAaniaSaanut()}
        </div>
      </div>
    )
  }

}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)