import { Optional } from "@common/components/Optional";
import * as Types from "../common/models";
import { Cat, Container, NoDataContainer, NoDataText } from "./List.components";
import pawImage from "@common/images/paw.jpeg";

interface Props {
  cats: Types.Cat[];
}

const List: React.FC<Props> = ({ cats }) => (
  <Container single={cats.length < 2}>
    <Optional if={!!cats.length}>
      {cats.map((cat) => (
        <Cat key={cat.id} src={cat.url} alt="Cat" />
      ))}
    </Optional>
    <Optional if={!cats.length}>
      <NoDataContainer>
        <Cat src={pawImage} alt="Paw" />
        <NoDataText>No data</NoDataText>
      </NoDataContainer>
    </Optional>
  </Container>
);

export { List };
