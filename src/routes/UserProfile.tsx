import { useUser } from "./UserProvier.tsx";

export default function UserProfile() {
  const { user } = useUser();

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl w-80 text-center border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600">Thông tin người dùng</h2>
      <p className="text-gray-700 mt-2">Tên: {user.name}</p>
      <p className="text-gray-700">Tuổi: {user.age}</p>
    </div>
  );
}
