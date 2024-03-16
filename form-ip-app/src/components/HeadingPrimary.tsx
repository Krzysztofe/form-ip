import { Typography } from "@mui/material";
import { memo } from "react";

interface Props {
  headingText: string;
  color?: string;
}

const HeadingPrimary = memo((props: Props) => {
  return (
    <Typography
      variant="fs_16_sb"
      color={props.color ? props.color : "primary"}
      component="p"
    >
      {props.headingText}
    </Typography>
  );
});

export default HeadingPrimary;
