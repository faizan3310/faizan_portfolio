import React, { useEffect, useState } from 'react';
import api from '../api';
import EntryForm from './EntryForm';
import EntryList from './EntryList';

const EntityList = () => {
    const [entities, setEntities] = useState([]);
    const [selectedEntity, setSelectedEntity] = useState(null);

    useEffect(() => {
        const fetchEntities = async () => {
            const response = await api.get('/entities');
            setEntities(response.data);
        };
        fetchEntities();
    }, []);

    return (
        <div>
            <h2>Entities</h2>
            <ul>
                {entities.map((entity) => (
                    <li key={entity.id} onClick={() => setSelectedEntity(entity)}>
                        {entity.name}
                    </li>
                ))}
            </ul>
            {selectedEntity && (
                <>
                    <EntryForm entity={selectedEntity} />
                    <EntryList entityId={selectedEntity.id} />
                </>
            )}
        </div>
    );
};

export default EntityList;
