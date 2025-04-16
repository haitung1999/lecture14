function ParentComponent() {
  const [name, setName] = useState("");

  // Hàm xử lý thay đổi tên
  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600">Lifting State Up</h1>
      <p className="mt-2 text-lg text-gray-700">Tên: {name}</p>
      <ChildComponent onNameChange={handleNameChange} />
    </div>
  );
}

interface ChildProps {
  onNameChange: (name: string) => void;
}

function ChildComponent({ onNameChange }: ChildProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="mt-4 p-6 bg-white shadow-lg rounded-lg w-80 text-center border border-gray-200">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onNameChange(e.target.value); // Truyền giá trị lên component cha
        }}
        className="border-2 border-gray-300 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
        placeholder="Nhập tên..."
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🏠 Trang chủ</h1>
      <ParentComponent />
    </div>
  );
}
