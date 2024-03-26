import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Button, Card, IconButton } from "react-native-paper";

export const BottomTabs = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Bem vindo, Fernando!</Text>
        <Button
          icon="exit-to-app"
          mode="contained"
          onPress={() => navigation.navigate("login")}
        >
          Sair
        </Button>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate("selectProducts")}>
          <Card>
            <Card.Title
              title="Select Products"
              subtitle="Selecionar Produtos"
              left={(props) => <Avatar.Icon {...props} icon="magnify" />}
              right={(props) => <IconButton {...props} icon="dots-vertical" />}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("insertProducts")}>
          <Card>
            <Card.Title
              title="Insert Products"
              subtitle="Inserir Produtos"
              left={(props) => (
                <Avatar.Icon {...props} icon="file-upload-outline" />
              )}
              right={(props) => <IconButton {...props} icon="dots-vertical" />}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("updateProducts")}>
          <Card>
            <Card.Title
              title="Update Products"
              subtitle="Atualizar Produtos"
              left={(props) => <Avatar.Icon {...props} icon="update" />}
              right={(props) => <IconButton {...props} icon="dots-vertical" />}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("deleteProducts")}>
          <Card>
            <Card.Title
              title="Delete Products"
              subtitle="Deletar Produtos"
              left={(props) => <Avatar.Icon {...props} icon="delete" />}
              right={(props) => <IconButton {...props} icon="dots-vertical" />}
            />
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
});
