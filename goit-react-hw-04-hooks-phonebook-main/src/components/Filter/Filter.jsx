import { Label } from 'components/';
import s from './Filter.module.css';

export const Filter = ({name, onFilterChange}) => {
    return <Label labelTitle={'Find contacts by name'}>
        <input
            type="text"
            name="filter"
            placeholder='Search name'
            value={name}
            onChange={onFilterChange}
    />
    </Label>
}
