import React, { Component } from 'react';

class TableBody extends React.Component {
    render() { 
        const {data:rows,columns} =this.props;
        return(
            <tbody>
                {
                    rows.map(row =>{
                        return(
                            <tr>
                                {
                                    columns.map(column=>{
                                        return column.content(row,column.path)
                                    })
                                }
                            </tr>
                        )
                    })
                }
  </tbody>
        );
    }
}
 
export default TableBody;