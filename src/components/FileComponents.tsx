interface IFileComponent {
  fileName: string;
}

const FileComponent = ({ fileName }: IFileComponent) => {
  return (
    <div className="flex items-center space-x-1">
      <span>{">"}</span>
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        viewBox="0 0 16 16"
        fill="#7d8590"
        width={20}
        height={20}
      >
        <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
      </svg>
      <span>{fileName}</span>
    </div>
  );
};

export default FileComponent;
