import React, { Component } from 'react'
import Coin from '../Coin/Coin'
import './CoinFlipper.css'

class CoinFlipper extends Component {
	constructor(props) {
		super(props)
		// State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
		// Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
		this.state = {
			side: 0,
			flipping: false,
			filpCount: 0,
			yaziCount: 0,
			turaCount: 0,
		}
	}
	handleClick = () => {
		// "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
		this.setState({ flipping: true })
		// 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
		setTimeout(() => {
			this.setState({ flipping: false })
			this.setState({ side: Math.floor(Math.random() * 2) })
			this.setState({ filpCount: this.state.filpCount + 1 })
			this.state.side === 1
				? this.setState({ yaziCount: this.state.yaziCount + 1 })
				: this.setState({ turaCount: this.state.turaCount + 1 })
		}, 1000)
	}

	render() {
		return (
			<div className='CoinFlipper'>
				<h1>Yazı mı Tura mı?</h1>
				<Coin side={this.state.side} flipping={this.state.flipping} />
				<button onClick={this.handleClick}>At!</button>
				<p>{this.state.side}</p>
				<p>
					Toplam
					<strong> {this.state.filpCount} </strong>
					atıştan
					<br />
					<strong> {this.state.turaCount} </strong>ü tura
					<br />
					<strong> {this.state.yaziCount} </strong>
					si yazı geldi.
				</p>
			</div>
		)
	}
}

export default CoinFlipper
