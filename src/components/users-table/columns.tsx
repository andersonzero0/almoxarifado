"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/contexts/AuthContext";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "name",
    header: "Nome"
  },
  {
    accessorKey: "username",
    header: "Login"
  },
  {
    accessorKey: "role",
    header: "Cargo"
  }
];
