import React from 'react';
import { Table } from 'react-bootstrap';

const SingleTask = ({ task }) => {
    const {tittle, description} = task;
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
          
                    <th>Task Name</th>
                    <th>Task Description</th>
                  
                </tr>
            </thead>
            <tbody>
                <tr>
          
                    <td>{tittle}</td>
                    <td>{description}</td>
              
                </tr>
               
            </tbody>
        </Table>
    );
};

export default SingleTask;