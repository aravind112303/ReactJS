import {createAsyncThunk} from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok) {
            throw new Error("Failed to fetch users");
        }
        return await res.json();
    }
);

export default fetchUsers;