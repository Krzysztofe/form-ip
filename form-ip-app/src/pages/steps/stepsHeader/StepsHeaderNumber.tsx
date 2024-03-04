import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { rwd } from "../../../utils/rwd";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";

type Props = {
  idx: number;
};

const StepsHeaderNumber = (props: Props) => {
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  return (
    <>
      <Box
        sx={{
          width: rwd("20px", "30px"),
          height: rwd("20px", "30px"),
          border: 1,
          borderRadius: "100%",
          display: "grid",
          placeItems: "center",
          backgroundColor:
            currentStepIdx >= props.idx ? "primary.main" : "transparent",
          color: currentStepIdx >= props.idx ? "white" : "info.main",
        }}
      >
        <Typography variant="fs_14_sb" color="info">
          {props.idx + 1}
        </Typography>
      </Box>
    </>
  );
};

export default StepsHeaderNumber;
