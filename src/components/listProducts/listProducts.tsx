import { memo } from "react";
import { Avatar, Button, Card, IconButton, Text } from "react-native-paper";
import { Api } from "../../services/api";

const ListProducts = ({ lstProdutos }: any) => {
  return lstProdutos.map((produto: any) => {
    return (
      <Card key={produto.id_produto} style={{ flex: 1, margin: 8 }}>
        <Card.Cover source={{ uri: produto.imagens[0] }} />
        <Card.Content>
          <Text variant="titleLarge">{produto.nome}</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Editar</Button>
          <Button onPress={() => {
            console.log("Deletar produto ID:", produto.id_produto);
            Api.deleteById(produto.id_produto)
              .then(() => {
                console.log("Produto deletado com sucesso!");
              })
              .catch((error) => console.error(error));
          }}>Deletar</Button>



        </Card.Actions>
      </Card>
    );
  });
};

export default memo(ListProducts);
