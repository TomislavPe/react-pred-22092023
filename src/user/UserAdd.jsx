import React, { useState } from "react";

const UserAdd = ({ addUserToState }) => {
    const [name, setName] = useState("");
    const [years, setYears] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleYearsChange = (event) => {
        setYears(event.target.value);
    };

    return (
        <>
            <p>Upisite ovdje podatke za novog korisnika</p>
            <form
                onSubmit={(event) => {
                    addUserToState(event, name, years);
                    setName("");
                    setYears("");
                }}
            >
                <div>
                    <label>
                        Ime:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Godine:
                        <input
                            type="text"
                            name="years"
                            value={years}
                            onChange={handleYearsChange}
                        />
                    </label>
                </div>
                <input type="submit" value="Dodaj korisnika" />
            </form>
        </>
    );
};

export default UserAdd;
