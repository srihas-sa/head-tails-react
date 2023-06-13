// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  isClicked = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {image, total, heads, tails} = this.state

    if (tossResult === 0) {
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        total: total + 1,
        heads: heads + 1,
      })
    } else {
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        total: total + 1,
        tails: tails + 1,
      })
    }
  }

  render() {
    const {image, total, heads, tails} = this.state
    return (
      <div className="outer">
        <div className="inner">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={image} className="image" alt="" />
          <button className="button" type="button" onClick={this.isClicked}>
            {' '}
            Toss Coin{' '}
          </button>
          <div className="count">
            <p className="margin">Total:{total}</p>
            <p className="margin">Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
