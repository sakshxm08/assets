import UploadImage from "./components/UploadImage";
import { useFilesContext } from "./hooks/useFilesContext";
const App = () => {
  const Files = useFilesContext();

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <h1 className="text-center font-black text-6xl">sakshxm08</h1>
      <UploadImage />
      <div>
        <h2>Uploaded Images</h2>
        {Files.files.map((image) => (
          <div key={image._id}>
            <img
              src={image.url}
              alt="Uploaded"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            {/* Display image name */}
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
