import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Error parsing user data:", error);
            localStorage.removeItem("user");
            setUser(null);
        }
        setLoading(false);
    }, []);


    const login = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:5000/api/user/login", {
                email,
                password,
            });

            const loggedInUser = response.data.user;
            setUser(loggedInUser);
            localStorage.setItem("user", JSON.stringify(loggedInUser));

            // Redirect based on role
            if (loggedInUser.admin) {
                navigate("/admin");
            } else if (loggedInUser.manager) {
                navigate("/manager");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };


    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };
    if (loading) return <div>Loading...</div>;
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);