import React, { Component } from 'react';
import shortid from 'shortid';
import { Section, Title } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      const cont = {
        id: shortid.generate(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [cont, ...prevState.contacts],
      }));
    }
  };

  changeFiltar = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilter = () => {
    const { filter, contacts } = this.state;
    const normalFiltar = filter.toLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(normalFiltar)
    );
  };
  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { filter } = this.state;
    const filterContacts = this.getFilter();
    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <Title>Contacts</Title>
        <Filter onChange={this.changeFiltar} value={filter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </Section>
    );
  }
}

export default App;
