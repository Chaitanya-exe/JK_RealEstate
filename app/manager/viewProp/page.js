"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import { dummyPropertiesData } from "@/constants/dummydata";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));


const columns = [
  { id: "owner", label: "Owner'sName", minWidth: 100 },
  { id: "location", label: "Location", minWidth: 100 },
  {
    id: "size",
    label: "Size",
    minWidth: 100,
    align: "center",
  },
  {
    id: "address",
    label: "Address",
    minWidth: 150,
    align: "center",
  },
 
];

const page = () => {
  const [propertiesDetail, setPropertiesDetail] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleFetch = async () => {
    // e.preventDefault();
    try {
      const response = await fetch("/api/estate/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Optionally check if the response is ok before parsing JSON
      if (!response.ok) {
        console.error("Error response:", response.statusText);
        alert("Error while fetching properties");
        return;
      }

      const data = await response.json();

      if (!data.success) {
        alert("Error while fetching properties");
        return;
      }

      setPropertiesDetail(data);
    } catch (error) {
      console.error(error);
      alert("some error occured");
    }
  };

  React.useEffect(() => {
    // handleFetch();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "83%", overflow: "hidden" }} className="mx-auto mt-12">
      <TableContainer sx={{ maxHeight: 460 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="font-semibold"
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyPropertiesData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dummyPropertiesData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default page;
