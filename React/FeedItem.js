// @flow weak

import React, {
    PureComponent
} from 'react';
import GreyLayout from '../../layouts/GreyLayout.jsx';
import { Button } from 'react-bootstrap';
import 'react-table/react-table.css';

var path = "/history/page"
var url = appConfig.BASE_URL + path;

class FeedItem extends PureComponent {

    constructor(props) {
        super(props);
        this.store = this.props.store.appState;
        this.state = { number: "" };
    }

   
    handleOnGo = () => {
        this.setState({ number: this.props.number });
        //console.log("Connector id " + this.props.number);
     }


    render() {
        let shape = this.props.shape == 'Undefined' ? "n/a" : this.props.shape
        let type = this.props.type == 'Undefined' ? "n/a" : this.props.type
        let status = this.props.status == 'Undefined' ? "n/a" : this.props.status
        let kw = this.props.kw == 'Undefined' ? "n/a" : this.props.kW
        let price = this.props.pricing == 'null' ? "n/a" : this.props.pricing
        let number = this.props.number;
        console.log("Connector, status: " + this.props.status)
        return (
            number > 0 ?
                <div>

                    <div className="row">
                        <div class="col-sm-4">
                            <p>shape: &nbsp; {shape} &nbsp;type: {type} </p>
                            <div class="v-space-20" />
                        </div>
                        <div class="col-sm-4">
                            <p> status: {status}  kW: {kw} price: </p>

                        </div>
                        <div class="col-sm-4">
                            <Button
                                type="submit"
                                className="btn-inverse gdark" onClick={this.handleOnGo}>
                                CHARGE HERE
                </Button>
                        </div>

                    </div>
                </div>
                : null
        )
    }
}
export default FeedItem;


