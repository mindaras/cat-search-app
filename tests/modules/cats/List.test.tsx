import renderer from "react-test-renderer";
import { List } from "@modules/cats/components/List";
import { Container } from "@testUtils/components/Container";
import { Cat } from "@modules/cats/common/models";

describe("List", () => {
  it("matches a snapshot", () => {
    const cats: Cat[] = [
      { id: "1", url: "/cat1.png" },
      { id: "2", url: "/cat2.png" },
    ];
    const component = renderer.create(
      <Container>
        <List cats={cats} />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
