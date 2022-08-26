import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Select } from ".";

export default {
  title: "Example/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const List = [
  { name: "Wade Cooper", values: 1 },
  { name: "Arlene Mccoy", values: 2 },
  { name: "Devon Webb", values: 3 },
  { name: "Tom Cook", values: 4 },
  { name: "Tanya Fox", values: 5 },
  { name: "Hellen Schmidt", values: 6 },
];

const Template: ComponentStory<typeof Select> = (args) => {
  const [selected, setSelected] = useState(List[0]);
  return (
    <Select {...args} onChange={(e) => setSelected(e)} selected={selected} />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  list: List,
};
