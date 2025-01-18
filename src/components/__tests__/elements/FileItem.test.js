import { render, screen } from "@testing-library/react";
import FileItem from "../../elements/FileItem";

test("renders FileItem component with data", () => {
  const mockFile = {
    file: "file1.txt",
    text: "some text",
    number: 42,
    hex: "#000000",
  };

  render(<FileItem file={mockFile} />);

  expect(screen.getByText(/file1.txt/i)).toBeInTheDocument();
  expect(screen.getByText(/some text/i)).toBeInTheDocument();
  expect(screen.getByText(/42/i)).toBeInTheDocument();
  expect(screen.getByText(/#000000/i)).toBeInTheDocument();
});
