import { useState } from 'react';
import { Wrapper, Section, ContactForm, Filter, ContactList, Notification } from "components/";
import useLocalStorage from 'hooks/useLocalStorage';
import Swal from 'sweetalert2';

function App() {
    const [contacts, setContacts] = useLocalStorage('contacts', []);
    const [filter, setFilter] = useState('');

    const formSubmitHandler = data => {
        if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
            setFilter('');
            
            return Swal.fire(`${data.name} is already in contacts`)
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