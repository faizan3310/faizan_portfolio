import React, { useState } from 'react';
import api from '../api';

const EntityForm = ({ onEntityCreated }) => {
    const [name, setName] = useState('');
    const [attributes, setAttributes] = useState([{ name: '', type: 'STRING' }]);

    const handleAddAttribute = () => {
        setAttributes([...attributes, { name: '', type: 'STRING' }]);
    };

    const handleAttributeChange = (index, field, value) => {
        const newAttributes = [...attributes];
        newAttributes[index][field] = value;
        setAttributes(newAttributes);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const entity = { name, attributes };
        try {
            const response = await api.post('/entities', entity);
            onEntityCreated(response.data);
            setName('');
            setAttributes([{ name: '', type: 'STRING' }]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Entity Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            {attributes.map((attribute, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Attribute Name"
                        value={attribute.name}
                        onChange={(e) => handleAttributeChange(index, 'name', e.target.value)}
                        required
                    />
                    <select
                        value={attribute.type}
                        onChange={(e) => handleAttributeChange(index, 'type', e.target.value)}
                    >
                        <option value="STRING">String</option>
                        <option value="INTEGER">Number</option>
                        <option value="DATE">Date</option>
                    </select>
                </div>
            ))}
            <button type="button" onClick={handleAddAttribute}>Add Attribute</button>
            <button type="submit">Create Entity</button>
        </form>
    );
};

export default EntityForm;
