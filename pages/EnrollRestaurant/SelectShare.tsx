import { FormControl, Grid, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React, { FC } from "react";
import { observer } from 'mobx-react-lite';
import store from "./store/store";
import { SHARE_LIST } from "./store/enums";

const SelectShare: FC = observer(() => {
    const { shareId, setShareId } = store;

    function handleChangeType(event: SelectChangeEvent) {
        const id: string = event.target.value;

        setShareId(Number(id));
    }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        공유목록 선택
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <FormControl fullWidth>
            <Select value={shareId.toString()} onChange={handleChangeType}>
              {SHARE_LIST.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
});

export default SelectShare;
