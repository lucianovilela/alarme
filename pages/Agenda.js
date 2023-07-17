import React from 'react';
import { View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import Calendar from '../components/Calendar';
import useDb from '../components/db';

import { useStateContext } from '../components/StateProvider';

import moment from 'moment'

export default function Agenda() {
  const { state, action } = useStateContext();
  const [diasSelecionados, setDiasSelelecionados] = React.useState([]);
  const {  getDiasDoMes, setDiasDoMes } = useDb();
  React.useEffect(() => {
    (async () => {
      const userdias = await getDiasDoMes(state.user);
      setDiasSelelecionados(userdias.dias ? userdias.dias : []);
    })();
  }, [state.user]);
  return (
    <View>
      <Calendar
        onDateChange={(data) => {
          setDiasSelelecionados((current) => [...current, data]);
          //setDiasDoMes(state.user, data.year(), data.month(), diasSelecionados);
        }}
      />
      <ScrollView >
        
          {diasSelecionados.map((dia) => (
            <List.Item title={moment(dia.toDate()).format('DD/MM/yyyy')} 
              left={props => <List.Icon {...props} icon="calendar" />}
            />
          ))}
        
      </ScrollView>
    </View>
  );
}
