import { useState } from "react";
import { useUser } from "./UserProvier.tsx";

export default function UserUpdater() {
  const { updateUser } = useUser();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleUpdate = () => {
    if (!name || !age) return;
    updateUser({ name, age: Number(age) });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl w-80 text-center border border-gray-200 mt-4">
      <h2 className="text-xl font-bold text-blue-600">Cập nhật người dùng</h2>
      <input
        type="text"
        placeholder="Nhập tên mới..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-2 px-4 py-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Nhập tuổi mới..."
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="mt-2 px-4 py-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleUpdate}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Cập nhật
      </button>
    </div>
  );
}
