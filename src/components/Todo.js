import React, { useState } from 'react';

export default function Todo({ text, completed, idx, toggleTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const handleEdit = (e) => {
        setEditedText(e.target.value);
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            editTask(idx, editedText);
            setIsEditing(false);
        }
    };

    const handleBlur = () => {
        setIsEditing(false);  // exit edit mode on blur
    };

    return (
        <li className="todo_container">
            <input type="checkbox" checked={completed} onChange={() => toggleTask(idx)} />
            {isEditing ? (
                <input type="text" value={editedText} onChange={handleEdit} onKeyUp={handleKeyUp} onBlur={handleBlur} autoFocus />
            ) : (
                <p className={completed ? 'completed' : ''} onClick={() => setIsEditing(true)}> {text} </p>
            )}
        </li>
    );
}