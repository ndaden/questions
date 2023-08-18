import QInput from "./components/QInput";
import QLink from "./components/QLink";
import QNavbar from "./components/QNavbar";

function App() {
  return (
    <div className="relative flex flex-col h-screen dark text-foreground bg-background">
      <QNavbar brandLabel={"QUESTIONS"} />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        <QInput
          label="Ma question est, "
          placeholder="saisir une question"
          type="text"
          className="max-w-lg"
        />
      </main>
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

export default App;
