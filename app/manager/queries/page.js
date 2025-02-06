"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
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
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="my-3">
              <div className="mb-4">
                <h1 className="text-lg font-[550]">Type :-</h1>
                <div className="flex gap-3 mt-2 text-[15px] *:bg-cardBg *:py-1 *:px-3 *:rounded *:capitalize ">
                  {row.type.map((historyRow,i) => (
                    <span key={i}>{historyRow}</span>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-lg font-[550]">Inquiries :-</h1>
                <div className="flex flex-col text-[15px] text-wrap gap-2 tracking-wide my-2 *:bg-cardBg *:py-2 *:px-3 *:rounded *:capitalize ">
                  {row.Inquiry.map((historyRow,i) => (
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
  return (
    <TableContainer component={Paper} className="max-w-[70vw] mx-auto my-16">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className="font-[550] capitalize ">Name</TableCell>
            <TableCell className="font-[550] capitalize ">email</TableCell>
            <TableCell className="font-[550] capitalize ">
              Phone number
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
