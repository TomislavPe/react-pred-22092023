import "./App.css";
import { useState } from "react";
import { UserFunction, UserAdd } from "./user";

function App() {
    const initialUsers = [
        { id: 1, name: "Ivan", years: 30 },
        { id: 2, name: "Marko", years: 35 },
        { id: 3, name: "Ana", years: 25 },
    ];

    const [users, setUsers] = useState(initialUsers);

    const uvecajGodine = () => {
        setUsers((prevState) => {
            const updatedUsers = prevState.map((user) => {
                return { ...user, years: user.years + 1 };
            });
            return updatedUsers;
        });
    };

    const handleChangeName = (event, index) => {
        const newUsers = [...users];
        newUsers[index].name = event.target.value;
        setUsers(newUsers);
    };

    const addUserToState = (event, name, years) => {
        event.preventDefault();
        name = name || "default";
        years = years || 30;

        const newUsers = [...users];
        newUsers.push({
            id: users.length + 1,
            name: name,
            years: years,
        });
        setUsers(newUsers);
    };

    return (
        <>
            <h1>Obrasci</h1>
            {users.map((user, index) => (
                <UserFunction
                    key={user.id}
                    name={user.name}
                    years={user.years}
                    changeName={(event) => handleChangeName(event, index)}
                />
            ))}

            <div>
                <button onClick={uvecajGodine}>Uvecaj godine</button>
            </div>
            <UserAdd addUserToState={addUserToState} />
        </>
    );
}

export default App;
