import React, { Component } from 'react';
import TableBody from './table-body.component';
import TableHeader from './table-header.component';

class Table extends React.Component {
    render() { 
        const {header,data,columns} =this.props
        return(
            <table class="table">
                <TableHeader header={header} columns={columns}/>
                <TableBody 
                    data={data}
                    columns ={columns}
                />
            </table>
        );
    }
}
 
export default Table;