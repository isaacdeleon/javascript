import React, { Component } from 'react';
import { BASE_API_URL, CURRENT_NUMBERS, RESET_GAME, NEXT_RANDOM } from '../../config';
import ShowNumber from '../elements/ShowNumbers/ShowNumbers';
import GetNextNumber from '../elements/GetNextNumber/GetNextNumber';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class BingoHome extends Component {

    state = {
        bingoNumbers: [],
        generatedNumber: null
    }

    componentDidMount() {
        this.getGeneratedNumbers();
    }

    //curried
    endpointBuilder = operation => `${BASE_API_URL}${operation}`;

    async getGeneratedNumbers() {
        try {
            const result = await fetch(this.endpointBuilder(CURRENT_NUMBERS));
            const bingoNumbers = await result.json();
            this.setState({
                bingoNumbers
            });
            window.scrollTo(0,document.body.scrollHeight);
        } catch (e) {
            console.log("There was an error", e);
        }
    }

    async callWebService(operation) {
        try {
            const urlEndpoint = this.endpointBuilder(operation)
            const result = await fetch(urlEndpoint);
            const text = await result.text();
            this.setState({
                generatedNumber: text
            });
            this.getGeneratedNumbers();
        } catch (e) {
            console.log("There was an error", e);
        }
    }

    clickButton = (operation)  => {
        if(operation === RESET_GAME) {
            confirmAlert({
                title: 'Confirmacíon',
                message: 'Se borraran los numeros generados; Deseas continuar ?.',
                buttons: [
                  {
                    label: 'Si',
                    onClick: () => this.callWebService(operation)
                  },
                  {
                    label: 'No',
                  }
                ]
              });
        } else {
            this.callWebService(operation)
        }
    }

    render() {
        return (
            <div>
                <div className="top">
                    <section id="banner" data-video="images/banner">
                        <div className="inner">
                            <header>
                                <h1>Bingo Cloud Familia</h1>
                                {this.state.bingoNumbers.length > 0 ?
                                    <ShowNumber bingoNumbers={this.state.bingoNumbers} />
                                    : <h2 className="text-no-numbers">No hay Números Generados</h2>}
                                <h2>Número Generado</h2>
                                <h1>{this.state.generatedNumber != null ? this.state.generatedNumber : null}</h1>
                            </header>
                        </div>
                    </section>
                </div>
                <div id="main">
                    <div className="inner">
                        <div className="thumbnails">
                            <GetNextNumber text="Generar Numero"
                                onClick={this.clickButton.bind(this)}
                                endpoint={NEXT_RANDOM}
                                cssClass="button fit" />
                            <GetNextNumber text="Reiniciar Juego"
                                onClick={this.clickButton.bind(this)}
                                endpoint={RESET_GAME}
                                cssClass="button style2 fit" />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default BingoHome;