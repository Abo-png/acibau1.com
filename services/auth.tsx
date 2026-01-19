import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: Partial<User> & { password: string }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('aci_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('aci_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    // Mock login delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (!email || !password) {
        throw new Error('Email and password are required');
    }
    
    // Mock validation: accept if password is at least 6 chars
    if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
    }

    const mockUser: User = {
      id: 'mock-id-1',
      firstName: 'Student',
      lastName: 'Member',
      email: email,
      phone: '12345678',
      aciMembershipNumber: 'ACI-001',
      role: 'member'
    };

    setUser(mockUser);
    localStorage.setItem('aci_user', JSON.stringify(mockUser));
  };

  const register = async (data: Partial<User> & { password: string }): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 800));

    if (!data.email || !data.password) {
         throw new Error('Missing required fields');
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      firstName: data.firstName || 'New',
      lastName: data.lastName || 'User',
      email: data.email,
      phone: data.phone || '',
      aciMembershipNumber: data.aciMembershipNumber || '',
      role: 'member'
    };

    setUser(newUser);
    localStorage.setItem('aci_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aci_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};