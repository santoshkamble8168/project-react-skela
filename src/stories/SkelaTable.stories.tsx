import React from "react";
import { Meta, Story } from "@storybook/react"
import {SkelaTable} from "../components";

const meta: Meta = {
  title: "Skela Table",
  component: SkelaTable,
  argTypes: {
    cols: {
      defaultValue: 0
    },
    rows: {
      defaultValue: 10
    },
    tableWidth: {
      defaultValue: "100%"
    },
    rowGap: {
      defaultValue: "10px"
    }
  }
}

export default meta;

const Template: Story = (args) => <SkelaTable {...args} />

export const Default = Template.bind({})

export const Colums = Template.bind({})
Colums.args = {
  cols: 4
}

export const Rows = Template.bind({})
Rows.args = {
  rows: 5
}

export const Color = Template.bind({})
Color.args = {
  color: "orange"
}

