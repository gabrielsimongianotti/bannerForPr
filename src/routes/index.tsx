import * as React from "react";

import { 
  Routes, 
  Route,  
  BrowserRouter,
} from "react-router-dom";
import { Login } from '../page/login'
import { Home } from '../page/home'

let AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  let signin =  (newUser: string, callback: VoidFunction) => {}

  let signout = (callback: VoidFunction) => {}

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes >
      
        <Route path="/login" element={<Login/>} />
        <Route index element={<Home/>} />
    
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;