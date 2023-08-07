import {useState} from 'react';
import Label from './Label';
import InputName from './InputName';
import InputNumber from './InputNumber';
import Button from 'components/Button';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid'

function ContactForm(props) {
    const [id, setId] = useState(nanoid(6));
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleIdChange = () => {
        return setId(nanoid(6));
    }

    const handleSubmit = event => {
        event.preventDefault();

        handleIdChange();

        setTimeout(() => {
            props.onSubmit({ id, name, number });

        resetForm();
        }, 10);
    };

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        
        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number': {
                setNumber(value);
                break;
            }
                
            default:
                return;
        }
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    };

    return <form onSubmit={handleSubmit} className={s.form}>
        <Label labelTitle={'Name'}>
            <InputName name={name} onNameChange={handleChange}/>
        </Label>
        
        <Label labelTitle={'Number'}>
            <InputNumber number={number} onNumberChange={handleChange} />
        </Label>
        
        <Button type={'submit'} title={"Add contact"} />
</form>
};

export default ContactForm;