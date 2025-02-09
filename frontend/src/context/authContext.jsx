import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const API_URL = 'http://localhost/chatapp/api/';

  // Fetch User (Check Session)
  const fetchUser = async () => {
    const token = localStorage.getItem('jwt_token'); // Get JWT from localStorage
    if (!token) {
      setUser(null);
      return;
    }

    try {
      const response = await axios.get(`${API_URL}profile.php`, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
        withCredentials: true, // Include cookies if needed
      });
      setUser(response.data.user || null);
    } catch (error) {
      setUser(null);
    }
  };

  // Register User
  const registerUser = async (userData) => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await axios.post(`${API_URL}register.php`, userData, {
        withCredentials: true,
      });
      console.log("Registration Success:", response.data);
      localStorage.setItem('jwt_token', response.data.token);
      setUser(response.data.user);
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      setIsError(error.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Login User
  const loginUser = async (credentials) => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await axios.post(`${API_URL}login.php`, credentials, {
        withCredentials: true,
      });
      const token = response.data.token;
      // Store token in localStorage
      localStorage.setItem('jwt_token', token);
      setUser(response.data.user);
    } catch (error) {
      setIsError(error.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Logout User
  const logoutUser = async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      await axios.post(`${API_URL}logout.php`, {}, { withCredentials: true });
      // Remove token from localStorage
      localStorage.removeItem('jwt_token');
      setUser(null);
    } catch (error) {
      setIsError(error.response?.data?.message || 'Logout failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isError,
        setUser,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
