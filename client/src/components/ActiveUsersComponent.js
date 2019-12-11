
import React from 'react';
import { TitleCase } from '../utils/utils'

export function ActiveUsersComponent({ name }) {
    return (
        <h2 className="mb-2">Active users from {TitleCase(name)}</h2>

    )
}


