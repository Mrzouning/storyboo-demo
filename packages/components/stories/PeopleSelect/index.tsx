import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Select, ListType } from "../Select";
import { LoadingComponent } from "../Loading";

const List: ListType[] = [
  { name: "Wade Cooper", values: 1 },
  { name: "Arlene Mccoy", values: 2 },
  { name: "Devon Webb", values: 3 },
  { name: "Tom Cook", values: 4 },
  { name: "Tanya Fox", values: 5 },
  { name: "Hellen Schmidt", values: 6 },
];

export const PeopleSelect = () => {
  const [selected, setSelected] = useState(List[0]);
  // const queryClient = useQueryClient();

  const query = useQuery(
    ["people-key"],
    () =>
      fetch("./people")
        .then((res) => res.json())
        .then((data) => data.people),
    {
      refetchInterval: 2000,
    }
  );
  if (query.status === "loading") return <LoadingComponent />;
  if (query.status === "success") {
    return (
      <Select
        list={query.data}
        selected={selected}
        onChange={(e) => setSelected(e)}
      />
    );
  }
  return <>error</>;
};
