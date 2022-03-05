import { FormControl, Grid, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React, { FC } from "react";
import { observer } from 'mobx-react-lite';
import store from "./store/store";



const DetailInfo: FC = observer(() => {
    const { foodTypeId, setFoodTypeId } = store;

    function handleChangeType(event: SelectChangeEvent) {
        const id: string = event.target.value;

        setFoodTypeId(Number(id));
    }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        상세 정보
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    </>
  );
});

export default DetailInfo;
