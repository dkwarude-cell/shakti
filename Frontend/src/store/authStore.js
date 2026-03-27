import { create } from 'zustand';
import AuthService from '../services/AuthService';

const useAuthStore = create((set) => ({
  user: AuthService.getUser(),
  role: AuthService.getRole(),
  token: AuthService.getToken(),
  isAuthenticated: AuthService.isAuthenticated(),

  login: (user, token, role) => {
    AuthService.setToken(token);
    AuthService.setUser(user, role);
    set({
      user,
      token,
      role,
      isAuthenticated: true,
    });
  },

  logout: () => {
    AuthService.logout();
    set({
      user: null,
      token: null,
      role: null,
      isAuthenticated: false,
    });
  },

  setUser: (user) => set({ user }),
}));

export default useAuthStore;
