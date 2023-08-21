import { Pagination } from "@nextui-org/react";
import QInput from "./components/QInput";
import QLink from "./components/QLink";
import QNavbar from "./components/QNavbar";
import QQuestion from "./components/QQuestion";
import QAutoComplete from "./components/QAutocomplete";

function App() {
  return (
    <div className="relative flex flex-col h-screen dark text-foreground bg-background">
      <QNavbar brandLabel={"QUESTIONS"} />
      <main className="container mx-auto max-w-6xl px-6 flex-grow">
        <div className="my-3">
          <QInput
            label="Ma question est, "
            placeholder="saisir une question"
            type="text"
            className="max-w-xl m-auto"
          />
        </div>
        <div className="my-3">
          <QAutoComplete />
        </div>

        <div className="m-auto">
          <QQuestion />
          <QQuestion />
          <QQuestion />
        </div>
        <div className="max-w-6xl">
          <Pagination
            total={10}
            initialPage={1}
            className="mx-auto max-w-[50%]"
          />
        </div>
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
