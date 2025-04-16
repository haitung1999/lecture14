import { createContext, useState, ReactNode, useContext } from "react";

// Định nghĩa kiểu dữ liệu cho User
interface User {
  name: string;
  age: number;
}

// Định nghĩa kiểu dữ liệu cho Context
interface UserContextType {
  user: User;
  updateUser: (newUser: User) => void;
}

// Tạo Context với giá trị mặc định
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider để bọc toàn bộ ứng dụng
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({ name: "Alice", age: 25 });

  // Hàm cập nhật user
  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook tùy chỉnh để sử dụng context
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
