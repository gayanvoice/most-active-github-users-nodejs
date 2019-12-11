
import React from 'react';
import { UserComponent } from './UserComponent'
import {Limit } from '../utils/utils'

export function TableDataComponent({ data, from}) {
    return (
        <tbody>
            {Limit(data.sort(this.compare)).map((item, key) => {
                return <UserComponent key={key} item={item} from={from} />

            })}
        </tbody>
    )
}


