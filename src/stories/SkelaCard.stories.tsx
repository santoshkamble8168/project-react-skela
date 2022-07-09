import React from "react";
import { Meta, Story } from "@storybook/react"
import {SkelaCard} from "../components";

const meta: Meta = {
  title: "Skela Card",
  component: SkelaCard,
  argTypes: {
    cradCount: {
      defaultValue: 1
    },
    squareWidth: {
      defaultValue: "250px"
    },
    squareHeight: {
      defaultValue: "250px"
    },
    title: {
      defaultValue: true
    },
    titleWidth: {
      defaultValue: "50%"
    },
    titleHeight: {
      defaultValue: "16px"
    },
    subTitle: {
      defaultValue: true
    },
    subTitleWidth: {
      defaultValue: "100%"
    },
    subTitleHeight: {
      defaultValue: "16px"
    },
    cardGap: {
      defaultValue: "10px"
    }
  }
}

export default meta;

const Template: Story = (args) => <SkelaCard {...args} />

export const Default = Template.bind({})

export const MultipleCards = Template.bind({})
MultipleCards.args = {
  cradCount: 4
}