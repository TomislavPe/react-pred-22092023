import React, { useState } from "react";

const AddNewUser = ({ addUser }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(30);
    return (
        <form
            onSubmit={(event) => {
                setName("")
                setAge(30)
                addUser(event, name, age);
            }}
        >
            <label htmlFor="nameInput">
                Unesi ime:
                <input
                    type="text"
                    id="nameInput"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                Unesi godine:
                <input
                    type="text"
                    id="ageInput"
                    value={age}
                    onChange={(event) => {
                        setAge(event.target.value);
                    }}
                />
            </label>
        </form>
    );
};

export default AddNewUser;
