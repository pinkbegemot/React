import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import FeedItem from "./FeedItem"
let Parser = require('rss-parser');
let parser = new Parser();

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = { rssItems: null };
        this.fetchFeed(this.props.url);
    }

    static PropTypes = {
        layout: PropTypes.object,
        url: PropTypes.string.isRequired,
        rssItems: PropTypes.object
    };

    fetchFeed = (url) => {
        parser.parseURL(url).then((feed) => {
            this.setState({ rssItems: feed.items });
        }).catch((err) => {
            console.log(err);
            alert("RSS parsing error");
        }).finally(() => {
            console.log('Everything done');
        });
    }

    handleOnClick = event => {
        this.state.url = this.props.url;
    };

    trimUrl = (str) => {
        var temp = str.split("//");
        var token = temp[temp.length - 1];
        var temp = token.split("rss")[0];
        //now remove the last char ('/' or '.')
        var domain = temp.slice(0, temp.length - 1);
        //console.log("domain " + domain);
        return domain;
    }
    render() {
        let source = this.trimUrl(this.props.url);
        let feeds = this.state.rssItems;
        return (
            <div className="container">
                <p className="ContactItem-email">{source}</p>
                {!feeds && <div className="vCentre fa fa-spinner fa-pulse fa-fw" />}
                {feeds&&Object.keys(feeds).map((k, index) => (
                                    <FeedItem title={feeds[k].title}
                                        link={feeds[k].link}
                                        date={feeds[k].pubDate}
                                    />
                                ))}
            </div>
        );
    }
}

export default Feed;
