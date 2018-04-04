import React, { Component } from 'react';

class FeedItem extends Component {

    constructor(props) {
        super(props);
        this.state = { title: "", link:"", date:"" };
    }

    formatDate = (s_date) => {
        return new Date(s_date).toLocaleTimeString('en-UK');

    }
       render() {
        let title = this.props.title == 'Undefined' ? "" : this.props.title
        let link = this.props.link == 'Undefined' ? "" : this.props.link
        let date = this.props.date == 'Undefined' ? "n/a" : this.formatDate(this.props.date)

        return (
            title.length > 0 ?
                 <div className="row">
                            <p>{title} </p>
                            <p> <a href={link} className="magenta" target="_blank">{date}  >>>> </a> </p>
                            <div className="v-space-20" />
                    </div>
                : null
        )
    }
}
export default FeedItem;


