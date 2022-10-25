import {createContext} from 'react';

const authSchema = {
  user: {},
  setUser: () => {},
};
const AuthContext = createContext(authSchema);
export default AuthContext;
