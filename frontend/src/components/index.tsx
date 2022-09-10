import { Table, TableCell, TableHead, TableBody } from "@mui/material";
import React from "react";

const CustomTable: React.FC = () => {
  return (
    <Table>
      <TableHead>
        <TableCell>foodID</TableCell>
        <TableCell>productName</TableCell>
        <TableCell>priceForUnit</TableCell>
        <TableCell>unitsStored</TableCell>
        <TableCell>unit</TableCell>
      </TableHead>
    </Table>
  );
};

export default CustomTable;
