
import React from 'react';
export function TableHeaderComponent() {
    return (
        <thead>
            <tr className="border-bottom">
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Username</th>
                <th scope="col">Location</th>
                <th scope="col">Total Contributions</th>
            </tr>
        </thead>
    )
}


