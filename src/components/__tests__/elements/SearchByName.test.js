import { render, screen, fireEvent } from "@testing-library/react";
import SearchByName from "../../elements/SearchByName";

describe("SearchByName Component", () => {
  it("renders input field with placeholder", () => {
    const mockSetFileName = jest.fn();
    render(<SearchByName fileName="" setFileName={mockSetFileName} />);

    const inputElement = screen.getByPlaceholderText("Search by file name");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls setFileName on input change", () => {
    const mockSetFileName = jest.fn();
    render(<SearchByName fileName="" setFileName={mockSetFileName} />);

    const inputElement = screen.getByPlaceholderText("Search by file name");
    fireEvent.change(inputElement, { target: { value: "testFile" } });

    expect(mockSetFileName).toHaveBeenCalledWith("testFile");
  });

  it("displays the current fileName value", () => {
    const mockSetFileName = jest.fn();
    render(<SearchByName fileName="testFile" setFileName={mockSetFileName} />);

    const inputElement = screen.getByPlaceholderText("Search by file name");
    expect(inputElement.value).toBe("testFile");
  });
});
