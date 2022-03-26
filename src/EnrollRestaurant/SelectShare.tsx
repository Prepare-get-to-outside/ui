import {
  Checkbox,
  FormControl,
  Grid,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import store from "./store/store";
import { SHARE_LIST } from "./store/enums";

const SelectShare: FC = observer(() => {
  const { shareList, setShareId } = store;

  function handleChange(event: SelectChangeEvent<typeof shareList>) {
    const {
      target: { value },
    } = event;

    console.log("heeeell ", typeof value === "string" ? value.split(",") : value);
    setShareId(typeof value === "string" ? value.split(",") : value);
  }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        공유목록 선택
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              multiple
              value={shareList}
              onChange={handleChange}
              renderValue={(selected: string[]) => {
                let checkedList: string[] = selected.map((selectedItem) => {
                    return SHARE_LIST[Number(selectedItem)].name
                })

                return checkedList.join(", ");
              }}
            >
              {SHARE_LIST.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  <Checkbox checked={shareList.indexOf(item.id.toString()) > -1} />
                  <ListItemText primary={item.name}></ListItemText>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
});

export default SelectShare;
