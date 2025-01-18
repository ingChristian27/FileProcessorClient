import { render, screen } from "@testing-library/react";
import FileList from "../../blocks/FileList";

test("renders FileList component", () => {
  const mockData = [
    { file: "file1.txt", lines: [{ text: "line1", number: 1, hex: "#000" }] },
  ];

  render(<FileList data={mockData} />);

  expect(screen.getByText(/file1.txt/i)).toBeInTheDocument();
  expect(screen.getByText(/line1/i)).toBeInTheDocument();
});
