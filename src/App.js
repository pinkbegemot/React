import React, { Component } from 'react';
import ContactsView from './contacts/ContactsView';
import Feed from './rss/Feed';
let url1 = "http://www.fontanka.ru/fontanka.rss"
let url2 = "http://feeds.bbci.co.uk/news/rss.xml?edition=int"
let url3 = "https://www.rt.com/rss/"
const isProduction = process.env.NODE_ENV === "production";
const PROXY =isProduction ? "": "https://cors-anywhere.herokuapp.com/"

export { isProduction };

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    //componentDidMount() { }

    render() {
        return (

            <div className="container">
     
                <div className="row dark note">
                
                    <div className="col-sm-4">
                    <ContactsView />
                    </div>
                    <div className="col-sm-8 border border-secondary">
                         
                            <div className="row">
                            <h3 className='ContactView-title'> International news</h3>
                            <div className="col-sm-4">
                            <Feed url={PROXY+url1} />
                        </div>
                            <div className="col-sm-4">
                            <Feed url={PROXY+url2} />
                        </div>
                            <div className="col-sm-4">
                            <Feed url={PROXY+url3} />
                            </div>

                        </div>
                        <div className="clearfix visible-xs"/>
                    </div>
                </div>
            </div>

        );
    }
/*
 * Actions
 */



   


Display=(el)=>{

    el.style.display = "block" ? el.style.display = "none" : el.style.display = "block";

    return el;

}
    
}

