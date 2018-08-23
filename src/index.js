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

  render() {
    return (
      <div>
        <div>
          <div>
            {this.props.anecdotes[this.state.selected]}
          </div>
          
          <div>
            this anecdote has {this.state.anekdoottienPisteet[this.state.selected]} votes
          </div>
          
          <div>
            <Button handleClick={this.seuraavaAnekdootti()}
              text="next anecdote"
            ></Button>

            <Button handleClick={this.paivitaPisteet(this.state)}
              text="vote"
            ></Button>
          </div>
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