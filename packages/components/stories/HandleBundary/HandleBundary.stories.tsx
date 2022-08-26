import React from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { Story, ComponentMeta } from "@storybook/react";
import { HandleBundary, HandleBundaryProps } from ".";

export default {
  title: "Components/HandleBundary",
  component: HandleBundary,
} as ComponentMeta<typeof HandleBundary>;

const Template: Story<HandleBundaryProps<{ text: string; unknown }>> = (
  args
) => {
  return <HandleBundary {...args} />;
};

export const Success = Template.bind({});

Success.args = {
  query: {
    isSuccess: true,
    isLoading: false,
    data: {
      text: "Hello",
    },
  } as UseQueryResult<{ text: string }>,
  children: (data) => <div>{data.text}</div>,
};
