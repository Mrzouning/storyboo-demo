import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PeopleSelect } from ".";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { rest } from "msw";

export default {
  title: "Example/PeopleSelect",
  component: PeopleSelect,
  decorators: [
    (Story) => (
      <>
        <Story />
        <ReactQueryDevtools initialIsOpen={false} />
      </>
    ),
  ],
} as ComponentMeta<typeof PeopleSelect>;

const Template: ComponentStory<typeof PeopleSelect> = (args) => {
  return <PeopleSelect />;
};

export const Default = Template.bind({});

Default.parameters = {
  msw: {
    handlers: [
      rest.get("/people", (req, res, ctx) => {
        return res(
          ctx.json({
            people: [
              { name: "Wade Cooper", values: 1 },
              { name: "Arlene Mccoy", values: 2 },
              { name: "Devon Webb", values: 3 },
              { name: "Tom Cook", values: 4 },
              { name: "Tanya Fox", values: 5 },
              { name: "Hellen Schmidt", values: 6 },
            ],
          })
        );
      }),
    ],
  },
};
