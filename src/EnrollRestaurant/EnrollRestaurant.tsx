import { ThemeProvider } from "@emotion/react";
import {
  Button,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Box,
} from "@mui/material";
import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import DefaultInfo from "./DefaultInfo";
import FoodType from "./FoodType";
import store from "./store/store";
import DetailInfo from "./DetailInfo";
import SelectShare from "./SelectShare";
import Confirm from "./Confirm";

const steps = ["기본정보", "종류", "상세정보", "공유목록 선택", "확인"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <DefaultInfo />;
    case 1:
      return <FoodType />;
    case 2:
      return <DetailInfo />;
    case 3:
      return <SelectShare />;
    case 4:
      return <Confirm />;

    default:
      throw Error("Unknown Step");
  }
}

const EnrollRestaurant: FC = observer(() => {
  const { activeStep, setActiveStep } = store;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          맛집 등록
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ pb: 5, pt: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {getStepContent(activeStep)}

        {activeStep < steps.length - 1 ? (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, ml: 1 }}
              onClick={handleNext}
            >
              Next
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, ml: 1 }}
              onClick={handleNext}
            >
              완료
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
});

export default EnrollRestaurant;
