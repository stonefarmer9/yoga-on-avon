"use client";

import MuiDivider, {
  type DividerProps as MuiDividerProps,
} from "@mui/material/Divider";
import { useMemo } from "react";

type DividerProps = Omit<MuiDividerProps, "orientation"> & {
  orientation?:
    | MuiDividerProps["orientation"]
    | Record<string, MuiDividerProps["orientation"]>;
};

type SxProps = NonNullable<DividerProps["sx"]>;

const Divider = (props: DividerProps) => {
  const { orientation = "horizontal", sx, ...dividerProps } = props;

  const sxProps = useMemo((): SxProps => {
    if (typeof orientation === "string") {
      return {
        borderBottomWidth: orientation === "vertical" ? 0 : "thin",
        borderRightWidth: orientation === "vertical" ? "thin" : 0,
      };
    }

    const borderBottomWidth: Record<string, string> = {};
    const borderRightWidth: Record<string, string> = {};

    for (const [breakpoint, value] of Object.entries(orientation)) {
      borderBottomWidth[breakpoint] = value === "vertical" ? "0" : "thin";
      borderRightWidth[breakpoint] = value === "vertical" ? "thin" : "0";
    }

    return Object.assign(
      {
        borderBottomWidth,
        borderRightWidth,
      },
      sx
    );
  }, [orientation, sx]);

  return (
    <MuiDivider
      {...dividerProps}
      sx={sxProps}
    />
  );
};

export { Divider, type DividerProps };
