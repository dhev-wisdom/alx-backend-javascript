import { RowID, RowElement } from './interface.js';

export interface insertRowFunc {
  (row: any): number,
}

export interface deleteRowFunc {
  (rowId: number): number,
}

export interface updateRowFunc {
  (rowId: number, row: any): number,
}
