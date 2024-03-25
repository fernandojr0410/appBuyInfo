import { useState } from "react";
import { View, Dimensions } from "react-native";
import { Avatar, Button, Text, TextInput } from "react-native-paper";
import { defaultStyles } from "../../config/default.styles";

export const Login = ({ navigation }: any) => {
  const { width, height } = Dimensions.get("window");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRegisteringAccount, setIsregisteringAccount] = useState(false);
  const [name, setName] = useState("");

  // TODO: função botão criar conta deve validar se os campos de senha são iguais e tem mais de 6 digitos se sim, cria a conta, se não apresenta uma mensagem de erro

  return (
    <View style={defaultStyles.container}>
      {/* Login */}
      {!isRegisteringAccount ? (
        <View style={defaultStyles.innerContainer}>
          <View>
            <Avatar.Image
              size={84}
              source={require("../../assets/avatar.png")}
            />
          </View>

          <View>
            <TextInput
              label="Email"
              value={email}
              right={<TextInput.Icon icon="account" />}
              style={{ marginTop: 16 }}
              onChangeText={setEmail}
            />

            <TextInput
              label="Senha"
              value={password}
              style={{ marginTop: 16 }}
              secureTextEntry={!isPasswordVisible}
              right={
                <TextInput.Icon
                  icon={isPasswordVisible ? "eye-off" : "eye"}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              }
              onChangeText={setPassword}
            />

            <Button
              icon="account-key"
              style={{ marginTop: 16 }}
              mode="contained"
              onPress={() => navigation.navigate("home")}
            >
              Login
            </Button>
            <Button
              icon="account-plus"
              style={{ marginTop: 16 }}
              mode="contained-tonal"
              onPress={() => setIsregisteringAccount(true)}
            >
              Cadastre-se
            </Button>
          </View>
        </View>
      ) : (
        <View style={defaultStyles.innerContainer}>
          <View>
            <Avatar.Image
              size={84}
              source={require("../../assets/avatar.png")}
            />
          </View>
          <View>
            <TextInput
              label="Nome"
              value={name}
              style={{ marginTop: 16 }}
              right={<TextInput.Icon icon="account" />}
              onChangeText={setName}
            />
            <TextInput
              label="Email"
              value={email}
              right={<TextInput.Icon icon="email" />}
              style={{ marginTop: 16 }}
              onChangeText={setEmail}
            />
            <TextInput
              label="Senha"
              value={password}
              style={{ marginTop: 16 }}
              secureTextEntry={!isPasswordVisible}
              right={
                <TextInput.Icon
                  icon={isPasswordVisible ? "eye-off" : "eye"}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              }
              onChangeText={setPassword}
            />
            <TextInput
              label="Confirme a Senha"
              value={password}
              style={{ marginTop: 16 }}
              secureTextEntry={!isPasswordVisible}
              right={
                <TextInput.Icon
                  icon={isPasswordVisible ? "eye-off" : "eye"}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              }
              onChangeText={setPassword}
            />
            <Button
              icon="account-plus"
              style={{ marginTop: 16 }}
              mode="contained"
              onPress={() => navigation.navigate("home")}
            >
              Criar Conta
            </Button>

            <Button
              icon="arrow-left"
              style={{ marginTop: 16 }}
              mode="contained-tonal"
              onPress={() => setIsregisteringAccount(false)}
            >
              Voltar
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};
