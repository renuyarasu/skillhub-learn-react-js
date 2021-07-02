import { valueToNode } from '@babel/types';
import React from 'react';
import { UserContext } from '../App';

const Component_C = () => {
    return (
        <div>
            <h1>Component C</h1>
            <UserContext.Consumer>
                {value => <div>{value}</div>}
            </UserContext.Consumer>
        </div>
    )
}

export default Component_C
