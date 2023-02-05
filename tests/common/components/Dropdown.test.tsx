import renderer from "react-test-renderer";
import { Container } from "@testUtils/components/Container";
import { Dropdown } from "@common/components/dropdown/Dropdown";
import { Options } from "@common/models";

describe("Dropdown", () => {
  it("shows selected option", () => {
    const options: Options = [
      { text: "ASC", value: "ASC" },
      { text: "DESC", value: "DESC", selected: true },
    ];
    const component = renderer.create(
      <Container>
        <Dropdown options={options} disabled={false} onChange={jest.fn()} />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("preselects first option", () => {
    const options: Options = [
      { text: "ASC", value: "ASC" },
      { text: "DESC", value: "DESC" },
    ];
    const component = renderer.create(
      <Container>
        <Dropdown options={options} disabled={false} onChange={jest.fn()} />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows disabled state", () => {
    const options: Options = [
      { text: "ASC", value: "ASC" },
      { text: "DESC", value: "DESC" },
    ];
    const component = renderer.create(
      <Container>
        <Dropdown options={options} disabled={true} onChange={jest.fn()} />
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
