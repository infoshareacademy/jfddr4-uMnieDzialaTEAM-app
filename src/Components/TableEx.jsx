import styled from "styled-components";
import React from 'react'

const TableContainer=styled.div`
    width: 900px;
    height:100vh;
    display: flex;
    flex-direction: column;
    
`
const TableHeader=styled.div`
    display: flex;
    justify-content: space-between;
`

function TableEx() {
    return (
        <div>
            <TableContainer>
                <TableHeader>
                    <div className="headerdiv">Transactions</div>
                    <div className="headerdiv">Category</div>
                    <div className="headerdiv">Amount</div>
                </TableHeader>
            </TableContainer>
        </div>
    )
}

export default TableEx
