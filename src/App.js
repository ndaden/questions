import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import QNavbar from "./components/QNavbar";
import QLink from "./components/QLink";

const router = createBrowserRouter([{ path: "*", Component: Root }]);
function App() {
  return (
    <div className="relative flex flex-col h-screen dark text-foreground bg-background">
      <QNavbar brandLabel={"QUESTIONS"} />
      <RouterProvider router={router} />
      <footer className="w-full flex items-center justify-center py-3">
        <QLink
          isExternal
          className="flex items-center gap-1 text-current"
          href="#"
          title="Questions homepage"
        >
          <span className="text-default-600">Made with ❤️ by Nabil</span>
        </QLink>
      </footer>
    </div>
  );
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
