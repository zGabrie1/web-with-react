import React, { TextareaHTMLAttributes } from 'react';

import './style.css';

interface ImputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Textarea: React.FC<ImputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor= { name }>{ label }</label>
            <textarea id={ name } { ...rest }/>
        </div>
    );
}

export default Textarea;