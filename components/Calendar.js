import React from 'react';
import {  View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default function Calendar({onDateChange}) {
  const [value, onChange] = React.useState();
  const [dataStyle, setDataStyle] = React.useState();
  return (
    <View>
      <CalendarPicker
        weekdays={['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
        months={[
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ]}
        previousTitle="Anterior"
        nextTitle="Próximo"
        todayBackgroundColor="#e6ffe6"
        selectedDayColor="#66ff33"
        selectedDayTextColor="#000000"
        scaleFactor={350}
        textStyle={{
          fontFamily: 'Arial',
          color: '#000000',
        }}
        
        onDateChange={onDateChange}
        value={value}
        customDatesStyles={dataStyle}
      />
    </View>
  );
}
