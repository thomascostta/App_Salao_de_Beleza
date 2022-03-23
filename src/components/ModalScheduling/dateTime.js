import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native-gesture-handler";
import { Touchable, Text, Title, Box, Button } from "../../styles";
import { dataTime } from "../../data/dataTime";
import util from "../../util";
import theme from "../../styles/theme.json";
import Icon from "react-native-vector-icons/MaterialIcons";

const DateTime = () => {
  const [selectDate, setSelectDate] = useState();
  const [selectTime, setSelectTime] = useState();
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);

  useEffect(() => {
    const today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);

  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ag",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  useEffect(() => {
    let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    let newListDays = [];

    for (let i = 1; i <= daysInMonth; i++) {
      let d = new Date(selectedYear, selectedMonth, i);
      // let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      // let selectedAvailableDate = `${year}-${month}-${day}`;

      // let availability = available.filter(item => item.date === selectedAvailableDate)

      newListDays.push({
        numberDays: i,
        month: months[d.getMonth()],
        weekday: days[d.getDay()],
        // status: availability.length > 0 ? true : false;
      });
    }
    setListDays(newListDays);
    setSelectDate(1);
    setListHours([]);
    setSelectedHour(0);
  }, [selectedMonth, selectedYear]);

  const selectButtom = (item) => {
    setSelectDate(item);
  };

  const selectButtomTime = (item) => {
    setSelectTime(item);
  };
  const handleLeftDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  };

  const handleRightDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  };

  return (
    <>
      <Text bold color="dark" hasPadding>
        Pra quando você deseja agendar
      </Text>
      <Box justify="center">
        <Button onPress={() => handleLeftDateClick()}>
          <Icon name="arrow-back-ios" size={24} color={theme.colors.muted} />
        </Button>
        <Text bold spacing="10px">
          {months[selectedMonth]} {selectedYear}
        </Text>
        <Button onPress={() => handleRightDateClick()}>
          <Icon name="arrow-forward-ios" size={24} color={theme.colors.muted} />
        </Button>
      </Box>
      <FlatList
        data={listDays}
        horizontal
        showsHorizontalScrollIndicator={false} // Tirar a barra de rolagem
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingLeft: 20,
          marginRight: 20,
        }}
        renderItem={({ item, index }) => (
          <Touchable
            key={index}
            width="70px"
            height="80px"
            spacing="0 10px 0 0"
            rounded="10px"
            direction="column"
            justify="center"
            align="center"
            border={`1px solid ${
              item.numberDays === selectDate
                ? theme.colors.primary
                : util.toAlpha(theme.colors.muted, 20)
            }`}
            background={
              item.numberDays === selectDate
                ? theme.colors.primary
                : theme.colors.light
            }
            onPress={() => selectButtom(item.numberDays)}
          >
            <Box
              direction="column"
              align="center"
              spacing="10px 0 0 0"
              justify="space-around"
            >
              <Text
                bold
                small
                color={item.numberDays === selectDate ? "light" : undefined}
              >
                {item.weekday}
              </Text>
              <Title
                bold
                small
                color={item.numberDays === selectDate ? "light" : undefined}
              >
                {item.numberDays}
              </Title>
              <Text
                bold
                small
                color={item.numberDays === selectDate ? "light" : undefined}
              >
                {item.month}
              </Text>
            </Box>
          </Touchable>
        )}
      />
      <Text bold color="dark" hasPadding>
        Que horas?
      </Text>
      <FlatList
        data={dataTime}
        keyExtractor={(item, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        renderItem={({ item }) => (
          <Box direction="column" spacing="0 10px 0 0">
            <Touchable
              key={item.id}
              width="100px"
              height="35px"
              spacing="0 0 5px 0"
              rounded="7px"
              justify="center"
              align="center"
              border={`1px solid ${
                item.time === selectTime
                  ? theme.colors.primary
                  : util.toAlpha(theme.colors.muted, 20)
              }`}
              background={
                item.time === selectTime
                  ? theme.colors.primary
                  : util.toAlpha(theme.colors.muted, 20)
              }
              onPress={() => selectButtomTime(item.time)}
            >
              <Text
                spacing="7px 0 0 0"
                bold
                color={item.time === selectTime ? "light" : undefined}
              >
                {item.time}
              </Text>
            </Touchable>
          </Box>
        )}
      />
    </>
  );
};

export default DateTime;
