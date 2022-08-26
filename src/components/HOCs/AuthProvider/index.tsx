import { createContext, ReactNode, useMemo, useState } from 'react';
import { IAuth } from '../../../@types/auth';

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthValue {
  user: IAuth | null;
  signIn: (newUser: IAuth | null, cb: () => void) => void;
  signOut: (cb: () => void) => void;
}

export const AuthContext = createContext<AuthValue>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IAuth | null>(null);

  const signIn = (newUser: IAuth | null, cb: () => void) => {
    setUser(newUser);
    cb();
  };
  const signOut = (cb: () => void) => {
    setUser(null);
    cb();
  };

  const value: AuthValue = useMemo(() => ({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
