import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import store from "./store/store";

const DefaultInfo: FC = observer(() => {
    const {setResName, setMainAddrName, setDetailAddrName } = store;

  const hanleChaneResName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResName(event.target.value);
  };

  const hanleChaneMainAddr = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMainAddrName(event.target.value);
  };

  const hanleChaneDetailAddr = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddrName(event.target.value);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        기본정보
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="맛집 이름"
            label="맛집 이름"
            fullWidth
            onChange={hanleChaneResName}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField name="주소" label="주소" fullWidth 
            onChange={hanleChaneMainAddr}/>
        </Grid>
        <Grid item xs={4}>
          <Button sx={{ mt: 1 }} color="secondary" variant="contained">
            주소검색
          </Button>
        </Grid>
        <Grid item xs={8}>
          <TextField name="상세주소" label="상세주소" fullWidth onChange={hanleChaneDetailAddr}/>
        </Grid>
      </Grid>
    </>
  );
});

export default DefaultInfo;
