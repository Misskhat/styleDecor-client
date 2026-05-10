import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { axiosInstance } from "../utility/axiosInstance";

export const useRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/api/users/role/${user.email}`)
        .then((res) => {
          setRole(res.data.userRole);
          setRoleLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setRoleLoading(false);
        });
    }
  }, [user]);

  return { role, roleLoading };
};
