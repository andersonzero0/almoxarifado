"use client"
import { useDataContext } from "@/contexts/DataContext";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useEffect } from "react";

export default function UsersTable() {
    const { users, getUsers } = useDataContext()

    useEffect(() => {
        getUsers()
    }, [])
    
    return (
        <DataTable columns={columns} data={users}/>
    )
}