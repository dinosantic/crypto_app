import millify from "millify";

export const COLUMNS = [
  {
    Header: "Rank",
    accessor: "rank",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Symbol",
    accessor: "symbol",
  },
  {
    Header: "Market Cap",
    accessor: "marketCap",
    Cell: (tableProps) => millify(tableProps.row.original.marketCap),
  },
  {
    Header: "Price",
    accessor: "price",
    Cell: (tableProps) => millify(tableProps.row.original.price),
  },
];
