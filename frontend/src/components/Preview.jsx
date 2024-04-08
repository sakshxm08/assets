import PropTypes from "prop-types";

export const Preview = ({ file, title }) => {
  return (
    <div className="rounded-md border w-1/2 flex items-center">
      <div className="p-3 border-r aspect-square w-1/6 object-cover">
        <img src={file} alt="title" className="object-cover" />
      </div>
      <div className="p-2">{title}</div>
    </div>
  );
};

Preview.propTypes = {
  file: PropTypes.string,
  title: PropTypes.string,
};
