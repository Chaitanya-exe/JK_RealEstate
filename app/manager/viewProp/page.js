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
import { Alert, Collapse, IconButton, TablePagination } from "@mui/material";
import { dummyPropertiesData } from "@/constants/dummydata";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const columns = [
  { id: "owner", label: "Owner's Name", maxWidth: 200 },
  { id: "location", label: "Location", maxWidth: 200 },
  { id: "size", label: "Size", maxWidth: 150, align: "center" },
  { id: "address", label: "Address", maxWidth: 150, align: "center" },
  { id: "type", label: "Property Type", maxWidth: 200, align: "center" },
  { id: "status", label: "Status", maxWidth: 150, align: "center" },
];

const Page = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openRows, setOpenRows] = React.useState({});
  const [search, setSearch] = React.useState("");
  const [sortSize, setSortSize] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [properties, setProperties] = React.useState([]);

  console.log(properties);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    if (search || sortSize) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sortOrder", sortSize);

      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [searchParams, pathname, sortSize]);

  async function fetchPropertiesData(params) {
    // params.set("search", search);

    setLoading(true);
    try {
      const response = await fetch(`/api/estate/get?searchValue=${search}&sortOrder=${sortSize}`);

      const resData = await response.json();
      setLoading(false);
      setProperties(resData.data);
    } catch (error) {
      setLoading(false);
      console.error("Error occured while fetching properties :-", error);
    }
  }

  React.useEffect(() => {
    fetchPropertiesData();
  }, [search, sortSize]);

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

  const handleDelete=() =>{};

  return (
    <section className="max-w-[80vw] mx-auto my-8">
      <div className="gap-4 flex flex-col md:flex-row items-center justify-end">
        <div className="flex w-full md:w-fit overflow-hidden bg-transparent border rounded">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search by address, location or owner name`}
            type="text"
            className="p-2 flex-1 focus:outline-none md:min-w-[300px] bg-transparent rounded"
          />
          <button className="bg-blue-500 hover:bg-blue-800  p-2 md:p-3">
            <SearchIcon
              onClick={() => fetchPropertiesData()}
              className="text-prim_white "
            />
          </button>
        </div>
        <div className="w-full flex items-center justify-between md:w-fit px-2 overflow-hidden bg-transparent border rounded">
          <SortIcon />
          <select
            value={sortSize}
            onChange={(e) => setSortSize(e.target.value)}
            className="p-3 flex-1 focus:outline-none bg-transparent "
          >
            <option value={""}></option>
            <option value={"asc"}>Increasing size</option>
            <option value={"desc"}>decreasing size</option>
          </select>
        </div>
      </div>

      <Paper
        // sx={{ width: "83%", overflow: "hidden" }}
        className="mx-auto mt-3"
      >
        <TableContainer sx={{ maxHeight: 600 }}>
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
            {loading ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan="2" className="p-4 text-center">
                    Fetching data
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {properties && properties.length > 0 ? (
                  properties
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, i) => (
                      <React.Fragment key={row.id || i}>
                        <TableRow className="bg-cardBg/50">
                          <TableCell>
                            <IconButton
                              size="small"
                              onClick={() => handleToggle(i)}
                            >
                              {openRows[i] ? (
                                <KeyboardArrowUpIcon />
                              ) : (
                                <KeyboardArrowDownIcon />
                              )}
                            </IconButton>
                            <IconButton
                              size="small"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure you want to delete this item?"
                                  )
                                ) {
                                  handleDelete(); // Call your delete function
                                }
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>

                          <TableCell component="th" scope="row">
                            {row.owner}
                          </TableCell>
                          <TableCell>{row.location}</TableCell>
                          <TableCell>{row.size}</TableCell>
                          <TableCell>{row.address}</TableCell>
                          <TableCell>{row.type}</TableCell>
                          <TableCell className="max-w-[350px]">{`For ${row.status}`}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            style={{ paddingBottom: 0, paddingTop: 0 }}
                            colSpan={6}
                          >
                            <Collapse
                              in={openRows[i]}
                              timeout="auto"
                              unmountOnExit
                            >
                              <div className="my-3  flex md:flex-wrap max-sm:flex-nowrap gap-3 *:rounded *:object-contain">
                                {row.images.map((image, index) => (
                                  <Image
                                    key={image.id}
                                    src={image.url}
                                    alt="image"
                                    width={280}
                                    height={200}
                                    className="hover:scale-105 max-sm:w-[150px] max-sm:-h-[150px]"
                                  />
                                ))}
                              </div>
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))
                ) : (
                  <TableRow>
                    <TableCell>No data found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            )}
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
    </section>
  );
};

export default Page;
