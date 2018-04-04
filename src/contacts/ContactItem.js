import React from 'react';
var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'ContactItem'},
        React.createElement('div', {className: 'ContactItem-name'}, this.props.contact.name),
        React.createElement('div', {className: 'ContactItem-email'}, this.props.contact.email),
        React.createElement('div', {className: 'ContactItem-description'}, this.props.contact.description)
      )
        
    )
  },
});
module.exports = ContactItem;
