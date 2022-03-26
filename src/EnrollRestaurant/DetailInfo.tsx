import { Grid, TextField, Chip, Box, Typography } from "@mui/material";
import React, { FC, KeyboardEvent, useState, ChangeEvent } from "react";
import { observer } from "mobx-react-lite";
import store from "./store/store";

const DetailInfo: FC = observer(() => {
  const [ tagField, setTagField ] = useState("");
  const { price, tagList, setTagList, setPrice, setMemo } = store;

  const hanleChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleOnKeyPressTag = (
    e: KeyboardEvent<HTMLDivElement>
  ) => {
    if (e.key === "Enter") {
      setTagList(tagList.concat({id: tagList.length, name: tagField}));
      setTagField("");
    }
  };

  const handleOnChangeTag = (event: ChangeEvent<HTMLInputElement>) => {
    setTagField(event.target.value);
  };

  const hanleChangeMemo = (event: ChangeEvent<HTMLInputElement>) => {
    setMemo(event.target.value);
  };

  const handleDeleteChip = (tag: Tag) => {
    setTagList(tagList.filter((item) => item.id !== tag.id))
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        상세 정보
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="가격대"
            label="가격대"
            fullWidth
            type="number"
            onChange={hanleChangePrice}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="메모"
            label="메모"
            fullWidth
            onChange={hanleChangeMemo}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={tagField}
            name="태그"
            label="태그입력 후 Enter"
            fullWidth
            onChange={handleOnChangeTag}
            onKeyPress={handleOnKeyPressTag}
          />
        </Grid>
        <Grid item xs={12}>
          <Box>
            {tagList.length > 0 &&
              tagList.map((tag: Tag, idx: number) => 
                <Chip
                  key={idx}
                  label={tag.name}
                  sx={{ml: 1, mt:1}}
                  onDelete={handleDeleteChip.bind(this, tag)}
                />
              )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
});

export default DetailInfo;
