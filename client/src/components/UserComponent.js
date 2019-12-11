
import React from 'react';
import { Check_username } from '../utils/utils'

export function UserComponent({ key, item, from }) {
    return (
        <tr key={key} className="border-bottom">
            <td className="align-middle">{parseInt(from) + key + 1}</td>
            <td className={"align-middle"}>
                <img className="rounded shadow" src={item.avatar_url}
                    alt={item.login} width="48" height="48" />
            </td>
            <td className="align-middle">
                <a className="text-gray-dark text-black-50" target={'_blank'} rel="noopener" href={'https://github.com/' + item.login}>
                    <strong>{Check_username(item.name)}</strong>

                    <span className="d-block">
                        @{item.login} ({item.followers})
            </span>
                </a>
            </td>
            <td className="text-black-50 align-middle text-break">{item.location}</td>
            <td className="font-weight-bold align-middle">{item.public_contributions}</td>
        </tr>
    )
}


