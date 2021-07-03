import * as React from 'react'
import { useEffect, useReducer, useMemo, Dispatch } from 'react'

interface ReducerState {
    tableData: number[][],
    dable: {
        row: number,
        cell: number,
        mine: number,
    }
    timer: number,
    result: string,
    halted: boolean,
    openedCount: number
}

export const MineSearch = () => {
    return (
        <div></div>
    )
}