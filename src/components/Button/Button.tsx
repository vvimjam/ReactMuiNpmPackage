import { Button, ButtonProps } from "@mui/material";
import React from 'react';

type MuiButtonProps = Pick<ButtonProps, 'variant' | 'name'>;

const MuiButton = (props: MuiButtonProps) => {
    return <Button variant={props?.variant ?? 'text'}>{props?.name ?? 'Button'}</Button>;
}

export default MuiButton;
export type { MuiButtonProps };