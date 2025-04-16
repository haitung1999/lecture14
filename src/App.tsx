import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      // Example of using context API
      {/* <UserProvider>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
          <UserProfile />
          <UserUpdater />
        </div>
      </UserProvider> */}
    </>
  );
}

export default App;
