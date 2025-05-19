import Button from "@/components/Button";
import TextInputWithLabel from "@/components/TextInputWithLabel";
import { userLogin } from "@/redux/auth/actions";
import { signin } from "@/utils/fetch";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    type: "",
    message: "",
    status: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ status: false, message: "", type: "" });
    setIsLoading(true);

    try {
      const res = await signin(`/auth/sign-in`, form);

      if (res?.data?.data) {
        const loginData = {
          user: res.data.data.fullName,
          token: res.data.data.accessToken,
        };

        dispatch(userLogin(loginData));
        sessionStorage.setItem("auth", JSON.stringify(loginData));

        setIsLoading(false);
        navigate("/");
      } else {
        setIsLoading(false);
        setAlert({
          status: true,
          message: res?.data?.message || "Login failed! Please try again.",
          type: "danger",
        });
      }
    } catch (error) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: error.message || "Internal server error",
        type: "danger",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="mx-auto" style={{ width: "50%" }}>
          {alert.status && (
            <div
              className={`p-4 mb-4 text-sm rounded-lg ${
                alert.type === "danger"
                  ? "text-red-700 bg-red-100"
                  : "text-green-700 bg-green-100"
              }`}
              role="alert"
            >
              {alert.message}
            </div>
          )}
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Admin Panel
        </h2>

        {/* ✅ Tambahkan onSubmit di form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextInputWithLabel
            label="Email"
            type="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
          />

          <TextInputWithLabel
            label="Password"
            type="password"
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
            loading={isLoading}
            disabled={isLoading}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
