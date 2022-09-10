import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const CustomTable: React.FC = () => {
  return (
    <Table
      sx={{
        "& td": {
          border: `${grey[400]} 1px solid `,
        },
      }}
    >
      <TableHead>
        <TableRow
          sx={{
            // "& td": {
            //   border: `${grey[700]} 1px solid`,
            //   fontSize: 10,
            //   textAlign: "center",
            // },
            backgroundColor: grey[700],
          }}
        >
          <TableCell>foodID</TableCell>
          <TableCell>productName</TableCell>
          <TableCell>priceForUnit</TableCell>
          <TableCell>unitsStored</TableCell>
          <TableCell>unit</TableCell>
          <TableCell>delete?</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>foodID</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>foodID</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CustomTable;
