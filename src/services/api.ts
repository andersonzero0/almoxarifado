import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const { user } = useContext(AuthContext)

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Authorization': `Bearer ${user?.access_token ? user.access_token : ''}`
    }
})