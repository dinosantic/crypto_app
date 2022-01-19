import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
//style
import styled from "styled-components";

const Table = ({ tableData, onChangeVale }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tableData, [tableData]);

  const table = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  return (
    <TableWrap>
      <input placeholder="Search" onChange={onChangeVale} />
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </TableWrap>
  );
};
const TableWrap = styled.div`
  display: block;
  position: relative;
  max-width: 100%;
  max-height: 500px;
  overflow-x: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  input {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: rgba(var(--table-row-color));
    outline: none;
    border: none;
    border-bottom: 2px solid rgba(var(--font-color), 0.1);
    z-index: 2;
    color: rgb(var(--font-color));
    ::placeholder {
      color: rgb(var(--font-color));
      opacity: 1;
    }
    ::-ms-input-placeholder {
      color: rgb(var(--font-color));
    }
  }
`;
const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  position: relative;
  tbody {
    margin-top: 40px;
    tr {
      cursor: pointer;
      &:hover {
        background-color: rgba(var(--table-row-color), 0.8);
      }
    }
  }
  thead > tr {
    position: sticky;
    max-width: 100%;
    top: 5%;
    left: 0;
    text-align: left;
    background-color: rgba(var(--table-row-color));
  }
`;

export default Table;