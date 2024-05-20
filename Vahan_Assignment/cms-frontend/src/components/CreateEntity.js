import React, { useState } from 'react';
import api from '../api';

const CreateEntity = () => {
    const [name, setName] = useState('');
    const [attributes, setAttributes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const attributeArray = attributes.split(',').map(attr => {
            const [attrName, attrType] = attr.split('<');
            return { name: attrName, type: attrType.slice(0, -1) };
        });

        try {
            await api.post('/entities', { name, attributes: attributeArray });
            alert('Entity created successfully');
        } catch (error) {
            console.error('Error creating entity:', error);
            alert('Error creating entity');
        }
    };

    return (
        <div>
            <h2>Create Entity</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Attributes: </label>
                    <input
                        type="text"
                        value={attributes}
                        onChange={(e) => setAttributes(e.target.value)}
                        placeholder="name<string>,email<string>,mobileNumber<number>,dateOfBirth<Date>"
                        required
                    />
                </div>
                <button type="submit">Create Entity</button>
            </form>
        </div>
    );
};

export default CreateEntity;
