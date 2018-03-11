//var parse = require('feed-reader').parse;

//let url = 'https://news.google.com/news/feeds?pz=1&cf=all&ned=us&hl=en&q=nodejs&output=rss';

//parse(url).then((feed) => {
//    console.log(feed);
//}).catch((err) => {
//    console.log(err);
//}).finally(() => {
//    console.log('Everything done');
//});

import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import ConnectorLight from "./ConnectorLight.js";
import Connector from "./Connector.js";
import ConnectorMicro from "./../../components/multistep/ConnectorMicro";


class Chargepoint extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store.appState;
        this.state = this.props;
    }

    static PropTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        layout: PropTypes.object,
        id: PropTypes.string,
        connectors: [].isRequired
    };

    handleOnDetails = event => {
        this.store.chargepoint = this.props.id;
        this.props.history.push({ pathname: "/chargepoint" });
    };
    render() {
        var description = this.state.description;
        var id = this.props.id;
        var street = this.props.street;
        var city = this.props.city;
        var postcode = this.props.postcode;
        var connectors = this.props.connectors;
        var distance = this.props.distance;
        var price = this.props.pricing;
        console.log("location " + this.props.location.pathname);
        return (
            <div class="container">
                <div class="row dark note">
                    <div class="col-sm-6 other">
                        <h1>{city}</h1>
                        <h2>{street}</h2>
                        <h2>{postcode}</h2>
                        <h3>{distance} miles</h3>
                    </div>
                    <div class="col-sm-6 other2">
                        <div>
                            {this.props.location.pathname == "/nearby" && (
                                <Button
                                    type="submit"
                                    className="btn-inverse gdark"
                                    onClick={this.handleOnDetails}
                                >
                                    <h2 class="animated wobble">Charger &nbsp;{description}</h2>
                                </Button>
                            )}

                            {this.props.connectors &&
                                this.props.location.pathname == "/nearby" &&
                                Object.keys(this.props.connectors).map((k, index) => (
                                    <ConnectorLight
                                        type={connectors[k].connectorPowerType}
                                        status={connectors[k].connectorStatus}
                                        shape={connectors[k].connectorShape}
                                        number={connectors[k].connectorId}
                                    />
                                ))}

                            {this.props.location.pathname == "/rfid" &&
                                Object.keys(this.props.connectors).map((k, index) => (
                                    <ConnectorMicro
                                        type={connectors[k].connectorPowerType}
                                        status={connectors[k].connectorStatus}
                                        shape={connectors[k].connectorShape}
                                    />
                                ))}
                            {this.props.connectors &&
                                this.props.location.pathname == "/chargepoint" &&
                                Object.keys(this.props.connectors).map((k, index) => (
                                    <Connector
                                        type={connectors[k].connectorPowerType}
                                        status={connectors[k].connectorStatus}
                                        shape={connectors[k].connectorShape}
                                        kW={connectors[k].connectorKwh}
                                        number={connectors[k].connectorId}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;
