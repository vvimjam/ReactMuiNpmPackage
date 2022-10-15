import MuiButton, { MuiButtonProps } from "./Button";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

export default {
    title: "Components/MuiButton",
    component: MuiButton,
} as Meta;

const Template: Story<MuiButtonProps> = (args) => <MuiButton {...args} />;

export const TextVariant = Template.bind({});
TextVariant.args = { variant: "text" };


export const OutlinedVariant = Template.bind({});
OutlinedVariant.args = { variant: "outlined" };

export const ContainedVariant = Template.bind({});
ContainedVariant.args = { variant: "contained" };
