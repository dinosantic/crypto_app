import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import { useNavigate } from "react-router-dom";
//style
import styled from "styled-components";

const Table = ({ tableData, onChangeValue }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tableData, [tableData]);

  const table = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;
  //
  const navigate = useNavigate();
  const handleRowClick = (row) => {
    navigate(`/crypto/${row.original.uuid}`);
  };
  return (
    <TableWrap>
      <input placeholder="Search" onChange={onChangeValue} />
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
              <tr {...row.getRowProps()} onClick={() => handleRowClick(row)}>
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
  max-height: 62vh;
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
    background-color: #e6e6e3;
    outline: none;
    border: none;
    border-bottom: 2px solid rgba(var(--font-color), 0.1);
    z-index: 2;
    color: rgba(var(--table-row-color));
    ::placeholder {
      color: rgba(var(--table-row-color));
      opacity: 1;
    }
    ::-ms-input-placeholder {
      color: rgba(var(--table-row-color));
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
    padding: 1rem 0;
    background-color: rgb(var(--table-row-color));
    th {
      padding: 0.3rem 0;
    }
  }
`;

export default Table;
