import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { observer } from 'mobx-react-lite';
import store from "./store/store";
import { FOOD_TYPES, SHARE_LIST } from "./store/enums";

const Confirm: FC = observer(() => {
    const { foodTypeId,  resName, mainAddr, detailAddr, shareId } = store;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        맛집 등록 정보 확인
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          맛집 이름
        </Grid>
        <Grid item xs={6}>
          {resName}
        </Grid>
        <Grid item xs={6}>
          주소
        </Grid>
        <Grid item xs={6}>
          {mainAddr}
        </Grid>
        <Grid item xs={6}>
          상세 주소
        </Grid>
        <Grid item xs={6}>
          {detailAddr}
        </Grid>
        <Grid item xs={6}>
          음식 종류
        </Grid>
        <Grid item xs={6}>
          {FOOD_TYPES[foodTypeId].name}
        </Grid>

        {shareId >= 0 && 
            <>
                <Grid item xs={6}>
                공유 목록
                </Grid>
                <Grid item xs={6}>
                {SHARE_LIST[shareId].name}
                </Grid>
            </>
        }
      </Grid>
    </>
  );
});

export default Confirm;
