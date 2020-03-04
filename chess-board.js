import React from 'react';
import './chess-board.css';

const Cell = (props)=> {
    const style = props.color + ' cell';
    return (
        <div className={style}>&nbsp;</div>
    );
};

const Row = (props)=> {
    const cellsArray = new Array(8).fill(0);
    const odd = props.rowNumber%2>0?'white':'black';
    const even = props.rowNumber%2==0?'white':'black';

    console.log (even + ' :: ' + odd);

    const cells = cellsArray.map((item, index) => {
        const cellColor = index%2===0?odd:even;
        console.log(cellColor + (index%2===0));
        return <Cell color={cellColor} key={index}/>
    });

    return <div className="row">{cells}</div>;
};

const ChessBoard = (props)=> {
    const rowsArray = new Array(8).fill(0);
    const rows = rowsArray.map((item, index)=>{
        return <Row rowNumber={index} />;
    });

    return (
        <div className="board">
            {rows}
        </div>
    )
};

export default ChessBoard
