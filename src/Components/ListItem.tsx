import React from "react";
import Link from "next/link";

import { User } from "../interfaces/index";

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => (
  <Link href={`/users/${data.id}`}>
    {data.id}:{data.name}
  </Link>
);

export default ListItem;
