import React from "react";
import useUsers from "../customHooks/useUsers";

const RQ = () => {
    const { data } = useUsers();

    return (
        <section>
            <h1>사용자 목록</h1>
            {data && (
                <ul>
                    {data.map((user) => {
                        return (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        )
                    })}
                </ul>
            )}
        </section>
    );
}

export default RQ;