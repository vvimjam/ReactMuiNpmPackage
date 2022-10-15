/// <reference types="react" />
import { ButtonProps } from "@mui/material";
declare type MuiButtonProps = Pick<ButtonProps, 'variant' | 'name'>;
declare const MuiButton: (props: MuiButtonProps) => JSX.Element;
export default MuiButton;
export type { MuiButtonProps };
