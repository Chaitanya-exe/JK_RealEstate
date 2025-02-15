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
import { Collapse, IconButton, TablePagination } from "@mui/material";
import { dummyPropertiesData } from "@/constants/dummydata";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";

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
  { id: "owner", label: "Owner's Name", maxWidth: 200 },
  { id: "location", label: "Location", maxWidth: 200 },
  { id: "size", label: "Size", maxWidth: 150, align: "center" },
  { id: "address", label: "Address", maxWidth: 150, align: "center" },
];

const Page = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openRows, setOpenRows] = React.useState({});

  const handleToggle = (index) => {
    setOpenRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "83%", overflow: "hidden" }} className="mx-auto mt-10">
      <TableContainer sx={{ maxHeight: 580 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  style={{ minWidth: column.maxWidth }}
                  // align={column.align}
                  className="font-semibold"
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyPropertiesData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <React.Fragment key={row.id || i}>
                  <TableRow className="bg-cardBg/50">
                    <TableCell>
                      <IconButton size="small" onClick={() => handleToggle(i)}>
                        {openRows[i] ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                      <IconButton
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {row.owner} -- {row.id}
                    </TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.size}</TableCell>
                    <TableCell className="max-w-[350px]">
                      {row.address}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}
                    >
                      <Collapse in={openRows[i]} timeout="auto" unmountOnExit>
                        <div className="my-3  flex flex-wrap gap-3 *:rounded *:object-contain">
                          <Image
                            src={"/formBg.png"}
                            alt="image"
                            width={280}
                            height={200}
                            className="hover:scale-105"
                          />
                          <Image
                            src={"/formBg.png"}
                            alt="image"
                            width={280}
                            height={200}
                            className="hover:scale-105 "
                          />
                          <Image
                            src={"/formBg.png"}
                            alt="image"
                            width={280}
                            height={200}
                            className="hover:scale-105 "
                          />
                          <Image
                            src={"/formBg.png"}
                            alt="image"
                            width={280}
                            height={200}
                            className="hover:scale-105"
                          />
                          <Image
                            src={"/formBg.png"}
                            alt="image"
                            width={280}
                            height={200}
                            className="hover:scale-105"
                          />
                        </div>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100, 200]}
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

export default Page;
