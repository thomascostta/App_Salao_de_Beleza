import React from "react";
import { ScrollView, Dimensions, View, Modal } from "react-native";
import ModalHeader from "./header";
import Resume from "./resume";
import DateTime from './dateTime';
// import Modal from "react-native-modal";
import { Box, Title, Text, GradientView, Touchable } from "../../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../styles/theme.json";

const ModalScheduling = () => {
  return (
    <Modal
      // isVisible={true}
      style={{
        width: "100%",
        height: "100%",
        padding: 0,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <ModalHeader />
        <Resume />
        <DateTime />
      </ScrollView>
    </Modal>
    // <View
    //   //
    //
    // >
    //   <Box height="70px">
    //     <GradientView
    //       colors={[theme.colors.dark, theme.colors.primary]}
    //       start={{ x: 0, y: 0 }}
    //       end={{ x: 1, y: 0 }}
    //     >
    //       <Box>
    //         <View>
    //           <Touchable hasPadding>
    //             <Icon
    //               name="chevron-left"
    //               color={theme.colors.light}
    //               size={30}
    //             />
    //           </Touchable>
    //         </View>
    //         <View style={{ marginTop: 10 }}>
    //           <Text color="light" margimBottom="3px">
    //             Finalizar Agendamento
    //           </Text>
    //           <Text small color="light">
    //             Horário, pagamento e especialista
    //           </Text>
    //         </View>
    //       </Box>
    //     </GradientView>
    //   </Box>
    // </View>
  );
};

export default ModalScheduling;
