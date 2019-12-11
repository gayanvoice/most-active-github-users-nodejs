
import React from 'react';
import { TableHeaderComponent, TableDataComponent, DatePipeComponent } from './index'

export function TableComponent({ modified, isRender, data, params }) {
    return (
        <div className="table-responsive">

            <table className="table table-borderless">
                <DatePipeComponent modified={modified} isRender={isRender} />
                < TableHeaderComponent />
                <TableDataComponent data={data} from={params.from} />

            </table>
        </div>

    )
}


