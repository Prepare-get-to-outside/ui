import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import store from "./store/store";
import { FOOD_TYPES } from "./store/enums";

const FoodType: FC = observer(() => {
  const { foodTypeId, setFoodTypeId } = store;

  function handleChangeType(event: SelectChangeEvent) {
    const id: string = event.target.value;

    setFoodTypeId(Number(id));
  }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        음식 종류
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select value={foodTypeId.toString()} onChange={handleChangeType}>
              {FOOD_TYPES.map((foodType, idx) => (
                <MenuItem key={idx} value={foodType.id}>
                  {foodType.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
});

export default FoodType;
