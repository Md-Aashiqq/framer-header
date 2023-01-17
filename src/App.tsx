import { Menu, MenuItem } from "./components/Menu";

function App() {
  return (
    <section style={{ height: "100vh" }} className="bg-slate-800">
      <div className="flex justify-center bg-slate-800">
        <Menu>
          <MenuItem item="hello1">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <a href="/s" className="text-green-100 font-bold">
                  Docs{" "}
                </a>
                <a href="/s" className="text-green-100 font-bold">
                  Gudies{" "}
                </a>
                <a href="/s" className="text-green-100 font-bold">
                  Api keys{" "}
                </a>
                <a href="/s" className="text-green-100 font-bold">
                  Contribute
                </a>
              </div>
            </div>
          </MenuItem>
          <MenuItem item="hello2">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <a href="/s" className="text-green-100 font-bold">
                  Docs{" "}
                </a>
                <a href="/s" className="text-green-100 font-bold">
                  Gudies{" "}
                </a>
                <a href="/s" className="text-green-100 font-bold">
                  Api keys{" "}
                </a>
                <a href="/s" className="text-green-100 font-bold">
                  Contribute
                </a>
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </section>
  );
}

export default App;
