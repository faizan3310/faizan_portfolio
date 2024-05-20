import React, { useState } from 'react';
import api from '../api';

const EntryForm = ({ entity }) => {
    const [entryData, setEntryData] = useState(
        entity.attributes.reduce((acc, attr) => ({ ...acc, [attr.name]: '' }), {})
    );

    const handleChange = (e, name) => {
        setEntryData({ ...entryData, [name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { entityId: entity.id, data: entryData };
        try {
            await api.post('/entries', data);
            setEntryData(entity.attributes.reduce((acc, attr) => ({ ...acc, [attr.name]: '' }), {}));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {entity.attributes.map((attr) => (
                <input
                    key={attr.name}
                    type="text"
                    placeholder={attr.name}
                    value={entryData[attr.name]}
                    onChange={(e) => handleChange(e, attr.name)}
                    required
                />
            ))}
            <button type="submit">Create Entry</button>
        </form>
    );
};

export default EntryForm;
