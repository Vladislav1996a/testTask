import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {UserInfo} from '../components/UserInfo';
import {UserParamsGroup} from '../components/UserParamsGroup';

export const UserScreen: React.FC = ({route}: any) => {
  if (!route.params) return;
  const {
    name,
    gender,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    url,
  } = route.params;
  return (
    <ScrollView>
      <View style={styles.wrap}>
        <UserInfo title="Name" userParams={name} />
        <UserInfo title="Gender" userParams={gender} />
        <UserInfo title="Height" userParams={height} />
        <UserInfo title="Mass" userParams={mass} />
        <UserInfo title="Hair Color" userParams={hair_color} />
        <UserInfo title="Skin Color" userParams={skin_color} />
        <UserInfo title="Eye Color" userParams={eye_color} />
        <UserInfo title="Birth Year" userParams={birth_year} />
        <UserInfo title="homeworld" userParams={homeworld} />
        <UserParamsGroup title="Films" userParams={films} />
        <UserParamsGroup title="Species" userParams={species} />
        <UserParamsGroup title="Vehicles" userParams={vehicles} />
        <UserParamsGroup title="Starships" userParams={starships} />
        <UserInfo title="Url" userParams={url} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 16,
  },
});
