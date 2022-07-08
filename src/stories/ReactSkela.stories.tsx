import React from "react";
import { Meta, Story } from "@storybook/react"
import ReactSkela, {Props} from "../components/ReactSkela";

const meta: Meta = {
  title: "React Skela",
  component: ReactSkela,
  argTypes: {
    type: {
      defaultValue: "line"
    },
    animationType: {
      defaultValue: "wave"
    },
    width: {
      defaultValue: "100%"
    },
    animation: {
      defaultValue: true
    },
    color: {
      defaultValue: "#dddddd"
    }
  }
}

export default meta;

const Template: Story<Props> = (args) => <ReactSkela {...args} />

export const Default = Template.bind({})

export const Line = Template.bind({})
Line.args = {
  type: "line",
  width:"400px",
  height:"20px"
}

export const Circle = Template.bind({})
Circle.args = {
  type: "circle",
  width:"200px",
  height:"200px"
}

export const Square = Template.bind({})
Square.args = {
  type: "square",
  width:"200px",
  height:"200px"
}

