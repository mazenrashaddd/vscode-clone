import FileComponent from "./components/FileComponents";
import { fileTree } from "./data";

function App() {
  return fileTree.children?.map((file) => {
    return <FileComponent fileName={file.name}></FileComponent>;
  });
}

export default App;
