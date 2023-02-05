import renderer from "react-test-renderer";
import { Container } from "@testUtils/components/Container";
import { Loader } from "@common/components/loader/Loader";

describe("Loader", () => {
  it("matches a snapshot", () => {
    const component = renderer.create(
      <Container>
        <Loader />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
