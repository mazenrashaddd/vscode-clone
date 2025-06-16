import FileComponent from "./components/FileComponents";
import FolderComponent from "./components/FolderComponent";

function App() {
  return (
    <>
      <FileComponent fileName="index.tsx"></FileComponent>
      <FileComponent fileName="index.html"></FileComponent>
      <FileComponent fileName="tailwind.css"></FileComponent>
      <FolderComponent folderName="node_modules"></FolderComponent>
    </>
  );
}

export default App;
