import "./App.css";
import { useState } from "react";
import { UserFunction ,AddNewUser} from "./user";

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

    const addUser = (event, name, years = 30) => {
        event.preventDefault();
        const newUser = {
            id: `${name}_${new Date().getTime()}`,
            name,
            years
        }
        setUsers([...users, newUser])
    };

    return (
        <>
            <h1>State</h1>
            {users.map((user, index) => (
                <UserFunction
                    key={user.id}
                    name={user.name}
                    years={user.years}
                    changeName={(event) => handleChangeName(event, index)}
                />
            ))}

            <AddNewUser addUser={addUser}/>

            {/*<div>
        <button onClick={uvecajGodine}>Uvecaj godine</button>
    </div>*/}
        </>
    );
}

export default App;
