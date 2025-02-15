"use client";

import * as React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { rows } from "@/constants/dummydata";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        className="min-h-screen bg-cardBg/50"
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.phoneNumber}</TableCell>
        <TableCell align="right" sx={{ maxWidth: "40px", fontSize: "12px" }}>
          {row.createdOn}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="my-3">
              <div className="flex gap-4  mb-4">
                <h1 className="text-lg font-[550]">Type :-</h1>
                <div className="flex gap-2 text-[15px] *:bg-cardBg/40 *:py-1 *:px-3  *:capitalize ">
                  {row.type.map((historyRow, i) => (
                    <span key={i}>{historyRow}</span>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-lg font-[550]">Inquiries :-</h1>
                <div className="flex flex-col text-[15px] text-wrap gap-1 tracking-wide my-2 *:bg-cardBg/40 *:py-2 *:px-3  *:capitalize ">
                  {row.Inquiry.map((historyRow, i) => (
                    <p key={i}>{historyRow}</p>
                  ))}
                </div>
              </div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Page() {
  const [filterValue, setFilterValue] = React.useState("all");

  // Get today's date and other time ranges
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const last7Days = new Date();
  last7Days.setDate(today.getDate() - 7);

  const last30Days = new Date();
  last30Days.setDate(today.getDate() - 30);

  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const startOfLastMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  );
  const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

  // Function to filter queries
  const filteredQueries = rows.filter((query) => {
    const queryDate = new Date(query.createdOn);

    switch (filterValue) {
      case "today":
        return queryDate.toDateString() === today.toDateString();
      case "yesterday":
        return queryDate.toDateString() === yesterday.toDateString();
      case "last7days":
        return queryDate >= last7Days;
      case "last30days":
        return queryDate >= last30Days;
      case "thismonth":
        return queryDate >= startOfMonth;
      case "lastmonth":
        return queryDate >= startOfLastMonth && queryDate <= endOfLastMonth;
      case "all":
        return true;
      default:
        return true;
    }
  });
  return (
    <section className="max-w-[70vw] mx-auto my-8">
      <div className="flex items-center gap-1 mb-3 float-right">
         <FilterAltIcon className="text-prim_black/70 size-8" />
        <FormControl className="min-w-[150px]">
          <select
            className="h-[40px] px-1 border-prim_black/20 focus:border-prim_black rounded-sm focus:outline-none border bg-transparent"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="all">All</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="thismonth">This Month</option>
            <option value="lastmonth">Last Month</option>
          </select>
        </FormControl>
      </div>

      <TableContainer component={Paper} className="">
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className="font-[550] capitalize ">Name</TableCell>
              <TableCell className="font-[550] capitalize ">email</TableCell>
              <TableCell className="font-[550] capitalize ">
                Phone number
              </TableCell>
              <TableCell
                align="right"
                sx={{ maxWidth: "50px" }}
                className="font-[550] capitalize "
              >
                sent on
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredQueries.length > 0 ? (
              filteredQueries.map((row) => <Row key={row.id} row={row} />)
            ) : (
              <TableRow>
                <TableCell colSpan="2" className="p-4 text-center">
                  No queries found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
