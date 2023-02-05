import renderer from "react-test-renderer";
import { Container } from "@testUtils/components/Container";
import { Cats } from "@modules/cats/Cats";

describe("Cats", () => {
  it("matches a snapshot", () => {
    const component = renderer.create(
      <Container>
        <Cats />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
