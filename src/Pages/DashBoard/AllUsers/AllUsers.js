import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-appointment-server-university.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });
  // console.log(users);

  const handleMakeAdmin = (id) => {
    fetch(
      `https://doctor-appointment-server-university.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successful.");
          refetch();
        }
      });
  };

  return (
    <div>
      <h3 className="text-4xl font-semibold text-slate-300 mt-6 text-center">
        All Users
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full rounded-0">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user?._id} className="hover">
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.category}</td>
                <td>
                  {user?.category !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user?._id)}
                      className="btn btn-xs btn-accent"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
