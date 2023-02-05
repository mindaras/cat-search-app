import renderer from "react-test-renderer";
import { Container } from "@testUtils/components/Container";
import { Optional } from "@common/components/Optional";

describe("Optional", () => {
  it("renders a child", () => {
    const component = renderer.create(
      <Container>
        <Optional if={true}>
          <div />
        </Optional>
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("doesn't render a child", () => {
    const component = renderer.create(
      <Container>
        <Optional if={false}>
          <div />
        </Optional>
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
