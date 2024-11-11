import React, { useMemo } from 'react';
import './grid.css'
import Column from '../Column';

function Grid({ gridData, grouping, userData }) {
    const keys = useMemo(() => Object.keys(gridData), [gridData]); // creates a map -> column name of gridData as key and the actual gridData as the value.

    return (
        <div className='grid'>
            {keys.map((k) => <Column key={k} tickets={gridData[k]} grouping={grouping} groupBy={k} userData={userData} />)}
        </div>
    );
}

export default Grid;
