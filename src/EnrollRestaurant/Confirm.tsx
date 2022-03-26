import { Grid, Typography, Chip, List, ListItem } from "@mui/material";
import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import store from "./store/store";
import { FOOD_TYPES, SHARE_LIST } from "./store/enums";
import { Box } from "@mui/system";

const Confirm: FC = observer(() => {
  const {
    foodTypeId,
    resName,
    mainAddr,
    detailAddr,
    shareList,
    price,
    tagList,
    memo,
  } = store;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        맛집 등록 정보 확인
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          맛집 이름
        </Grid>
        <Grid item xs={9}>
          {resName}
        </Grid>
        <Grid item xs={3}>
          주소
        </Grid>
        <Grid item xs={9}>
          {mainAddr}
        </Grid>
        <Grid item xs={3}>
          상세 주소
        </Grid>
        <Grid item xs={9}>
          {detailAddr}
        </Grid>
        <Grid item xs={3}>
          음식 종류
        </Grid>
        <Grid item xs={9}>
          {FOOD_TYPES[foodTypeId].name}
        </Grid>

        {shareList.length > 0 && (
          <>
            <Grid item xs={3}>
              공유 목록
            </Grid>
            <Grid item xs={9}>
              <List>
                {shareList.map((shareItem: string, index: number) => (
                  <ListItem key={index}>
                    {SHARE_LIST[Number(shareItem)].name}{" "}
                  </ListItem>
                ))}
              </List>
            </Grid>
          </>
        )}
        <Grid item xs={3}>
          가격대
        </Grid>
        <Grid item xs={9}>
          {price} 원
        </Grid>
        {memo !== "" && (
          <>
            <Grid item xs={3}>
              메모
            </Grid>
            <Grid item xs={9}>
              {memo}
            </Grid>
          </>
        )}
        <Grid item xs={3}>
          태그
        </Grid>
        <Grid item xs={9}>
          <Box>
            {tagList &&
              tagList.map((tag: Tag, idx: number) => (
                <Chip
                  key={idx}
                  label={tag.name}
                  sx={{ ml: idx === 0 ? 0 : 1, mt: 1 }}
                />
              ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
});

export default Confirm;
