import { Preview } from "../components/Preview";
import UploadImage from "../components/UploadImage";
import { useFilesContext } from "../hooks/useFilesContext";
export const Upload = () => {
  const Files = useFilesContext();

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <UploadImage />
      <div>
        <h2>Uploaded Images</h2>
        {Files.files.map((image) => (
          <Preview key={image._id} file={image.url} title={image.name} />
        ))}
      </div>
    </div>
  );
};
