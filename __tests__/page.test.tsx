import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders the Next.js logo", () => {
    render(<Home />);
    expect(screen.getByAltText("Next.js logo")).toBeInTheDocument();
  });

  it("renders Deploy Now and Documentation links", () => {
    render(<Home />);
    expect(screen.getByText("Deploy Now")).toBeInTheDocument();
    expect(screen.getByText("Documentation")).toBeInTheDocument();
  });
});
