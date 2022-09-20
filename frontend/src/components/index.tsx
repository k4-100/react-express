import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import axios from "axios";

type FoodQuery = {
  success: boolean;
  content: {
    foodID: number;
    productName: string;
    priceForUnit: number;
    unit: string;
    unitsStored: number;
  }[];
};

const CustomTable: React.FC = () => {
  const [data, setData] = useState<FoodQuery | null>(null);

  useEffect(() => {
    // axios.get("http://localhost:5000/food").then((response) => {
    //   console.log(response);
    // });
    axios({
      method: "get",
      url: "/food",
      baseURL: "http://localhost:5000",
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log("failed fetching: ", err));
  }, []);

  if (data === null) return <Typography> fetching </Typography>;

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
        {data.content.map(
          ({ foodID, productName, priceForUnit, unit, unitsStored }, i) => (
            <TableRow key={i}>
              <TableCell>{foodID}</TableCell>
              <TableCell>{productName}</TableCell>
              <TableCell>{priceForUnit}</TableCell>
              <TableCell>{unit}</TableCell>
              <TableCell>{unitsStored}</TableCell>
              <TableCell>
                <Button variant="contained" color="info">
                  X
                </Button>
              </TableCell>
            </TableRow>
          )
        )}
        {/* <TableRow>
          <TableCell>foodID</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>foodID</TableCell>
        </TableRow> */}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
