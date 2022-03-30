import { proxy } from "valtio";
import { Users } from "./hooks/userSearch";

export type UserSearchStore = {
  userLocation: string;
  users?: Users;
  pageCount: number;
  totalUsersCount: number;
  page: number;
  error: any;
};

export const store = proxy<UserSearchStore>({
  userLocation: "",
  users: [],
  pageCount: 0,
  totalUsersCount: 0,
  page: 1,
  error: "",
});

export default store;
