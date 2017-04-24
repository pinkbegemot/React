/*
 * Constants
 */


var CONTACT_TEMPLATE = {name: "", email: "", description: "", errors: null}



/*
 * Model
 */


// The app's complete current state
var state = {};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
  Object.assign(state, changes);
  ReactDOM.render(
    React.createElement(ContactsView, Object.assign({}, state, {
      onNewContactChange: updateNewContact,
      onNewContactSubmit: submitNewContact,
    })),
    document.getElementById('react-app')
  );
 
}

// Set initial data
setState({
  contacts: [
    {key: 1, name: " Martin Fowler", email: "martin@fowler.com", description: "Old friend"},
  ],
  newContact: Object.assign({}, CONTACT_TEMPLATE),
});



/*
 * Actions
 */


function updateNewContact(contact) {
  setState({ newContact: contact });
}


function submitNewContact() {
  var contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1, errors: {}});
  
  if (!contact.name) {
    contact.errors.name = ["Please enter your new contact's name"]
  }
  if (!/.+@.+\..+/.test(contact.email)) {
    contact.errors.email = ["Please enter your new contact's email"]
  }

  setState(
    Object.keys(contact.errors).length === 0
    ? {
        newContact: Object.assign({}, CONTACT_TEMPLATE),
        contacts: state.contacts.slice(0).concat(contact),
        
      }
    : { newContact: contact }
  )
  var div = $(".ContactView-title");
  $(div).fadeOut(); 

  $(div).fadeIn(2500, "linear", null);

}
function Display(el) {
      
    el.style.display = "block" ? el.style.display = "none" : el.style.display = "block" ;
 
    return el;
 
}


