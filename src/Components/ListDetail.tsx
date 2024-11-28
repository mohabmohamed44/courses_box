import * as React from "react";

import {User} from "@/interfaces/index";

type ListDetailProps = {
    item: User
}

const ListDetail = ({item: user} : ListDetailProps) => (
    <div>
        <h2>{user.name}</h2>
        <p>{user.id}</p>
    </div>
);

export default ListDetail;