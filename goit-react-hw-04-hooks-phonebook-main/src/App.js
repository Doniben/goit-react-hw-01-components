import { useState } from 'react';
import Wrapper from "components/Wrapper";
import Section from "components/Section";
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import useLocalStorage from 'hooks/useLocalStorage';

function App() {
    const [contacts, setContacts] = useLocalStorage('contacts', []);
    const [filter, setFilter] = useState('');

    const formSubmitHandler = data => {
        if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
            setFilter('');
            
            return alert(`${data.name} is already in contacts`);
        }

        setContacts(prevState => [...prevState, data]);
        setFilter('');
    }

    const handleFilterChange = event => {
        setFilter(event.currentTarget.value);
    };

    const deleteContact = contactId => {
        setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
    }

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

export default App;