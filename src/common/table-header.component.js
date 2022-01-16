import React, { Component } from 'react';

class TableHeader extends React.Component {
    render() { 
        const {header,columns} = this.props;
        return(
            <thead>
                <tr>
                    {
                        columns.map(item =>{
                            return(
                                <th>{item.lable}</th>
                            )
                        })
                    }
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;