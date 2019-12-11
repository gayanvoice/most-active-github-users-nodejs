
import React from 'react';
import { Link } from 'react-router-dom';

export function FilterComponent({ matchQuery }) {
    return (
        <div className="bg-white rounded">
            <nav className="nav pt-4 pb-2 table-responsive">
                <ul className="pagination m-auto">
                    <li className={"page-item " + (matchQuery.params.to === '300' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/300"}>All</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '25' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/25"}>25</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '50' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/50"}>50</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '75' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/75"}>75</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '100' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/100"}>100</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '125' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/125"}>125</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '150' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/150"}>150</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '175' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/175"}>175</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '200' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/200"}>200</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '225' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/225"}>225</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '250' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/250"}>250</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '275' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/275"}>275</Link>
                    </li>
                    <li className={"page-item " + (matchQuery.params.to === '300' ? "active" : null)}>
                        <Link className="page-link" to={"/country/" + matchQuery.params.name + "/0/300"}>300</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}


