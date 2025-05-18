import {API_ENDPOINT} from "../../config/constants";

export const fetchUsers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({type: "GET_ALL_USERS"});
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({type: "GET_ALL_USERS_SUCCESS", payload: data});
  } catch (error) {
    console.log("Error fetching users:", error);
    dispatch({
      type: "GET_ALL_USERS_FAILURE",
      payload: "Could not load users",
    });
  }
};
export const addNewUser = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      console.error("Failed to create user");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return {ok: false, error: data.errors[0].message};
    }
    dispatch({type: "ADD_USER", payload: data.user});
    return {ok: true};
  } catch (error) {
    console.error("Operation failed:", error);
    return {ok: false, error};
  }
};

export const deleteSpecificUser = async (dispatch: any, id: number) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error("Failed to delete user");
    }

    dispatch({type: "DELETE_USER", payload: id});
    return {ok: true};
  } catch (error) {
    console.error("Operation failed:", error);
    return {ok: false, error};
  }
};
