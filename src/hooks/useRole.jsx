import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { axiosInstance } from "../utility/axiosInstance";

export const useRole = () => {
  const { user, loading } = useAuth();
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (!loading && user?.email) {
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
  }, [user, loading]);

  return { role, roleLoading };
};
