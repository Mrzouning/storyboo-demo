import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoadingComponent } from ".";

export default {
  title: "Example/Loading",
  component: LoadingComponent,
} as ComponentMeta<typeof LoadingComponent>;

const Template: ComponentStory<typeof LoadingComponent> = (args) => {
  return <LoadingComponent />;
};

export const Default = Template.bind({});
