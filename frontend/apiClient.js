export const registerClient = async (formData) => {
  try {
    const res = await fetch("http://localhost:3000/api/clientvisit/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });
    const resData = await res.json();
    console.log(resData);
  } catch (error) {
    console.error(error);
  }
};

export const getClients = async () => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/clientvisit/getRegisterClients",
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const logIn = async (formData) => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const logOut = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/logout", {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
