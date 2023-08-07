import React, {Component} from 'react';
import { Wrapper, Section, ContactForm, Filter, ContactList, Notification } from "components/";
import Swal from 'sweetalert2';

class App extends Component{
    state = {
        contacts: [],
        filter: ''
    };

    formSubmitHandler = data => {
        const { contacts } = this.state;

        if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
            this.setState({
                filter: ''
            });
            
            return Swal.fire(`${data.name} is already in contacts`)
        }
        this.setState(prevState => ({
            contacts: [...prevState.contacts, data],
            filter: ''
        }));
    }

    handleFilterChange = event => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        });
    };

    deleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id!==contactId),
        }))
    }

    render() {
        const { formSubmitHandler, handleFilterChange, deleteContact } = this;
        const { contacts, filter } = this.state;

        return (
            <Wrapper>
                <Section title={'Phonebook'}>
                    <ContactForm onSubmit={ formSubmitHandler }/>
                </Section>

                <Section title={'Contacts'}>
                    <Filter name={filter} onFilterChange={handleFilterChange} />
                    {contacts.length > 0 ? (
                        <ContactList data={contacts} filterName={filter} onDeleteContact={ deleteContact }/>
                    ) : (
                        <Notification message="There are no contacts yet" />
                    )}
                </Section>
            </Wrapper>
        )
    }
}

export default App;