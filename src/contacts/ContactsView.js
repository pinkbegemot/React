import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
let CONTACT_TEMPLATE = { name: "", email: "", description: "", errors: null };

class ContactsView  extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            contacts: [
                { key: 1, name: " Martin Fowler", email: "martin@fowler.com", description: "Old friend" },
            ],
            newContact: CONTACT_TEMPLATE
        }
    }
 
    static PropTypes ={
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
    onNewContactChange: React.PropTypes.func.isRequired,
    onNewContactSubmit: React.PropTypes.func.isRequired,
  }

    render() {
        var conts = this.state.contacts;
        return (
            <div className="ContactView outline">
                <h3 className='ContactView-title'> My contacts</h3>
                <ul className='ContactView-list'>
                    {conts && Object.keys(conts).map((k, index) => (
                        <ContactItem contact={conts[k]}
                        />
                    ))}
                </ul>
                <ContactForm value={this.state.newContact}
                    onChange={this.updateNewContact}
                    onSubmit={this.submitNewContact} />
            </div>
        )
    }
  
    updateNewContact = (contact) => {
         this.setState({ newContact: contact });
    }


    submitNewContact = () => {
        var contact = Object.assign({}, this.state.newContact, { key: this.state.contacts.length + 1, errors: {} });
        if (!contact.name) {
            contact.errors.name = ["A contact without a name?"];
        
        }
        if (!/.+@.+\..+/.test(contact.email)) {
            contact.errors.email = ["Please enter a valid email address"]
     
        }
        this.setState(
           
        Object.keys(contact.errors).length === 0
                ? {
                    newContact: CONTACT_TEMPLATE,
                    contacts: this.state.contacts.concat(contact),
                }
                : { newContact: contact }
        );

     
    }
   
   
}
export default ContactsView;