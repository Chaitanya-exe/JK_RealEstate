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
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { FormControl } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const date = new Date(row.createdAt);

  console.log("date", date);

  return (
    <React.Fragment>
      <TableRow
        className="min-h-screen bg-cardBg/ w-full text-nowrap"
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
        <TableCell>{row.number}</TableCell>
        <TableCell align="right" sx={{ maxWidth: "40px", fontSize: "12px" }}>
          {date.toLocaleDateString()}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="my-3 text-nowrap">
              <div className="flex gap-4  mb-4">
                <h1 className="md:text-lg font-[550]">Type :-</h1>
                <div className="flex gap-2 md:text-[15px] *:bg-cardBg/40 *:py-1 *:px-3  *:capitalize ">
                  {row.type.map((historyRow, i) => (
                    <span key={i}>{historyRow.toLowerCase()}</span>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="md:text-lg font-[550]">Inquiries :-</h1>
                <div className="flex flex-col md:text-[15px] text-wrap gap-1 tracking-wide my-2 *:bg-cardBg/40 *:py-2 *:px-3  *:capitalize ">
                  {row.inquiry.map((historyRow, i) => (
                    <p key={i} className="max-w-[700px]">{historyRow}</p>
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
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [filterValue, setFilterValue] = React.useState("ALL");


  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(`/api/query/get?date=${filterValue}`);
        const resData = await response.json();
        setLoading(false);
        setData(resData.data);
      } catch (err) {
        setLoading(false);
        alert("some error occured");
      }
    }
    fetchData();
  }, [filterValue]);

  return (
    <section className="md:max-w-[70vw] max-sm:mx-4 mx-auto my-8">
      <div className="flex items-center gap-1 mb-3 float-right">
        <FilterAltIcon className="text-prim_black/70 size-8" />
        <FormControl className="min-w-[150px]">
          <select
            className="h-[40px] px-1 border-prim_black/20 focus:border-prim_black rounded-sm focus:outline-none border bg-transparent"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="ALL">All</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last7Days">Last 7 Days</option>
            <option value="last30Days">Last 30 Days</option>
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
              <TableCell className="font-[550] capitalize text-nowrap ">
                Phone number
              </TableCell>
              <TableCell
                align="right"
                sx={{ maxWidth: "50px" }}
                className="font-[550] capitalize text-nowrap "
              >
                sent on
              </TableCell>
            </TableRow>
          </TableHead>
          {isLoading ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan="2" className="p-4 text-center text-nowrap">
                  Fetching data
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {data && data.length > 0 ? (
                data.map((row) => <Row key={row.id} row={row} />)
              ) : (
                <TableRow>
                  <TableCell colSpan="2" className="p-4 text-center text-nowrap">
                    No queries found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </section>
  );
}
