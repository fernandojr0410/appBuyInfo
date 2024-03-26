import { StyleSheet, Text, View } from "react-native";

export const UpdateProducts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Página de Atualizar Produto</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
