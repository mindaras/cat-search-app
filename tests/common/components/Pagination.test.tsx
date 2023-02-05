import renderer from "react-test-renderer";
import { Container } from "@testUtils/components/Container";
import { Pagination } from "@common/components/pagination/Pagination";

describe("List", () => {
  it("shows 7 pages", () => {
    const component = renderer.create(
      <Container>
        <Pagination page={0} total={7} disabled={false} onChange={() => null} />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows 4 initial pages and the last page", () => {
    const component = renderer.create(
      <Container>
        <Pagination
          page={0}
          total={10}
          disabled={false}
          onChange={() => null}
        />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows first page, three middle pages and the last page", () => {
    const component = renderer.create(
      <Container>
        <Pagination
          page={4}
          total={10}
          disabled={false}
          onChange={() => null}
        />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows disabled state", () => {
    const component = renderer.create(
      <Container>
        <Pagination page={4} total={10} disabled={true} onChange={() => null} />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("doesn't show anything", () => {
    const component = renderer.create(
      <Container>
        <Pagination page={0} total={1} disabled={false} onChange={() => null} />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
