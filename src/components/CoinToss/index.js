// Write your code here

import {Component} from 'react'

import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, total: 0, isToss: headImage}

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        isToss: headImage,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        isToss: tailsImage,
      }))
    }
  }

  render() {
    const {heads, tails, total, isToss} = this.state

    return (
      <div className="bg-container">
        <div className="coin-content">
          <div className="cart">
            <h1 className="head">Coin Toss Game</h1>
            <p className="para">Heads (or) Tails</p>
            <div className="img-cart">
              <img src={isToss} className="img" alt="Toss Result" />
              <div>
                <button
                  type="button"
                  className="btn"
                  onClick={this.onClickButton}
                >
                  Toss Coin
                </button>
              </div>
              <div className="para-cart">
                <p className="para1">Total:{total}</p>
                <p className="para1">Heads:{heads}</p>
                <p className="para1">Tails:{tails}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
