import React, { useEffect, useState } from 'react';
import api from '../api';

const EntryList = ({ entityId }) => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const fetchEntries = async () => {
            const response = await api.get(`/entries/${entityId}`);
            setEntries(response.data);
        };
        fetchEntries();
    }, [entityId]);

    return (
        <div>
            <h2>Entries</h2>
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        {Object.entries(entry).map(([key, value]) => (
                            <div key={key}>
                                <strong>{key}:</strong> {value}
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EntryList;
