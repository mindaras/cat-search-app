import renderer from "react-test-renderer";
import { Container } from "@testUtils/components/Container";
import { Search } from "@common/components/search/Search";
import { Filters } from "@common/models";

describe("Search", () => {
  it("shows an input with filters", () => {
    const filters: Filters = [
      {
        options: [
          { text: "ASC", value: "ASC" },
          { text: "DESC", value: "DESC" },
        ],
        onChange: jest.fn(),
      },
      {
        options: [
          { text: "Abyssinian", value: "abyss" },
          { text: "Aegean", value: "aege" },
        ],
        onChange: jest.fn(),
      },
    ];

    const component = renderer.create(
      <Container>
        <Search
          value="some value"
          filters={filters}
          disabled={false}
          filtersDisabled={false}
          onChange={jest.fn()}
        />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows shows disabled state", () => {
    const filters: Filters = [
      {
        options: [
          { text: "ASC", value: "ASC" },
          { text: "DESC", value: "DESC" },
        ],
        onChange: jest.fn(),
      },
      {
        options: [
          { text: "Abyssinian", value: "abyss" },
          { text: "Aegean", value: "aege" },
        ],
        onChange: jest.fn(),
      },
    ];

    const component = renderer.create(
      <Container>
        <Search
          value="some value"
          filters={filters}
          disabled={true}
          filtersDisabled={false}
          onChange={jest.fn()}
        />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows an input with single filter", () => {
    const filters: Filters = [
      {
        options: [
          { text: "ASC", value: "ASC" },
          { text: "DESC", value: "DESC" },
        ],
        onChange: jest.fn(),
      },
    ];

    const component = renderer.create(
      <Container>
        <Search
          value="some value"
          filters={filters}
          disabled={false}
          filtersDisabled={false}
          onChange={jest.fn()}
        />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows an input with no filters", () => {
    const component = renderer.create(
      <Container>
        <Search
          value="some value"
          disabled={false}
          filtersDisabled={false}
          onChange={jest.fn()}
        />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
