import {Pressable, StyleSheet, Text, View} from 'react-native';
import {HartSvg} from './Svg/HartSvg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useMemo, useState} from 'react';
import {User, UserLocalStorage} from '../types';
import {useNavigation} from '@react-navigation/native';

type UserNameProps = {
  user: User;
  setLocalStorage: (value: UserLocalStorage[]) => void;
  localStarage: UserLocalStorage[] | null;
};

export const UserName: React.FC<UserNameProps> = ({
  user,
  setLocalStorage,
  localStarage,
}) => {
  const navigation = useNavigation();
  const {name, gender} = user;
  const storeData = useCallback(async () => {
    const getStorageArr = await AsyncStorage.getItem('names');
    if (getStorageArr === null) {
      const namesArray: UserLocalStorage[] = [];
      namesArray.push({name, gender});
      const jsonValue = JSON.stringify(namesArray);
      setLocalStorage(namesArray);
      await AsyncStorage.setItem('names', jsonValue);
      return;
    }

    const checkLocalArr = (
      JSON.parse(getStorageArr as string) as UserLocalStorage[]
    ).find(item => item.name === name);

    if (!checkLocalArr) {
      const namesArray: UserLocalStorage[] = [
        ...JSON.parse(getStorageArr as string),
      ];
      namesArray.push({name, gender});
      const jsonValue = JSON.stringify(namesArray);
      setLocalStorage(namesArray);
      await AsyncStorage.setItem('names', jsonValue);
    } else {
      const namesArray: UserLocalStorage[] = [
        ...JSON.parse(getStorageArr as string),
      ];
      const filteredArr = namesArray.filter(item => {
        return item.name !== name;
      });
      const jsonValue = JSON.stringify(filteredArr);
      setLocalStorage(filteredArr);
      await AsyncStorage.setItem('names', jsonValue);
    }
  }, []);

  const checkUserOnLocal = useMemo(() => {
    return localStarage?.some(item => {
      return item.name === name;
    });
  }, [localStarage]);
  return (
    <View style={styles.wrap}>
      <Pressable onPress={storeData}>
        <HartSvg fill={checkUserOnLocal} />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('User', user)}>
        <Text style={styles.text}>
          {name} / {gender}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },

  wrap: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
