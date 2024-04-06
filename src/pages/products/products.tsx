import { ScrollView, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import ListProducts from "../../components/listProducts/listProducts";
import { useEffect, useState } from "react";
import { Api } from "../../services/api";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {}, [isLoading, products]);

  const getProducts = async () => {
    setIsLoading(true);
    await Api.getAllProductsByVendor()
      .then((result) => {
        setProducts(result);
        setIsLoading(false);
        console.log("produtos carregados: ", products.length);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View>
      <Appbar.Header>
        {/* <Appbar.BackAction onPress={() => {}} /> */}
        <Appbar.Content title="Produtos" />
        <Appbar.Action icon="refresh" onPress={() => getProducts()} />
      </Appbar.Header>
      <ScrollView>
        {!isLoading ? (
          <ListProducts lstProdutos={products} />
        ) : (
          <Text>Carreagando produtos</Text>
        )}
      </ScrollView>
    </View>
  );
};
