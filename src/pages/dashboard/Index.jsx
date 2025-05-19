// import React, { useEffect } from "react";

// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";
// import FilterButton from "@/components/DropdownFilter";
// import Datepicker from "@/components/Datepicker";
// import { useSelector } from "react-redux";

// export default function Index() {
//   const auth = useSelector((state) => state.auth);

//   useEffect(() => {
//     console.log("Current token:", auth.token);
//   }, [auth.token]);

//   return (
//     <>
//       {/* Dashboard actions */}
//       <div className="sm:flex sm:justify-between sm:items-center mb-8">
//         {/* Left: Title */}
//         <div className="mb-4 sm:mb-0">
//           <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
//             Dashboard
//           </h1>
//         </div>

//         {/* Right: Actions */}
//         <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"></div>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* Line chart (Acme Plus) */}
//       </div>
//     </>
//   );
// }

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      navigate("/login");
    }
  }, [auth.token, navigate]);

  return (
    <div className="p-8">
      <h2>Welcome, {auth.user}</h2>
      <p>Your access token: {auth.token}</p>
    </div>
  );
}
