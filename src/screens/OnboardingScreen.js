import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import Onboarding from "react-native-onboarding-swiper";

import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected
    ? "rgba(254,254,254,0.8)"
    : "rgba(254,254,254,0.3)";

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        borderRadius: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <RectButton title="Skip" {...props} style={styles.button}>
    <Text style={styles.buttonText}>Pular</Text>
  </RectButton>
);

const Next = ({ ...props }) => (
  <RectButton title="Next" {...props} style={styles.button}>
    <Text style={styles.buttonText}>Próximo</Text>
  </RectButton>
);

const Done = ({ ...props }) => (
  <RectButton title="Done" {...props} style={styles.button}>
    <Text style={styles.buttonText}>Concluir</Text>
  </RectButton>
);

export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("SingIn")}
      onDone={() => navigation.navigate("SingIn")}
      titleStyles={{
        fontSize: 30,
        color: "#fff",
      }}
      subTitleStyles={{ fontSize: 16, color: "#fff" }}
      pages={[
        {
          backgroundColor: "#4890FD",
          image: <Image source={image1} style={styles.image} />,
          title: "Práticas esportivas",
          subtitle: "Mais de 30 práticas esportivas disponíveis",
        },
        {
          backgroundColor: "#3183FF",
          image: <Image source={image2} style={styles.image} />,
          title: "Musculação",
          subtitle: "Mais de 100 exercícios disponíveis",
        },
        {
          backgroundColor: "#196BE7",
          image: <Image source={image3} style={styles.image} />,
          title: "Métricas",
          subtitle: "Acompanhe sua evolução",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
  },

  button: {
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});
