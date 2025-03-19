import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";
import SearchBar from "../components/SearchBar";
import '../sections/table.css'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'id', label: 'Sr No', minWidth: 10},
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'username', label: 'Username', minWidth: 100 },
  
  {
    id: 'email',
    label: 'Email',
    minWidth: 100,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'website',
    label: 'Website',
    minWidth: 100,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Contact No',
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
];

const CustomerReviews = () => {
  
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      console.log(response.data);
      setUsers(response.data);
      setFilteredUsers(response.data);
    }).catch((error) =>{
      console.log(error,"Error while getting data");
  });
  }, []);

  const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    

  const handleSearch = (query) => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <section className="max-container" id="users">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">User</span> Say ?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied users about their exceptional experiences with us.
      </p>

      <SearchBar onSearch={handleSearch} />
      <br /> <br />
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead > 
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell  className="header"
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredUsers
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell className="content" key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number'
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
                    count={filteredUsers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
          </Paper>
    </section>

  );
}

export default CustomerReviews