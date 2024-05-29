import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useStore} from '../context/useStore';
import {ArrowRightSvg} from './Svg/ArrowRightSvg';
import {ArrowLeftSvg} from './Svg/ArrowLeftSvg';
import {GenderType} from './GenderType';
import {UserName} from './UserName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserLocalStorage} from '../types';

export const List: React.FC = () => {
  const {request, setRequest} = useStore();
  const [localStarage, setLocalStorage] = useState<UserLocalStorage[] | null>(
    null,
  );

  const nextPage = useCallback(async () => {
    if (!request?.next) return;
    let response = await fetch(request?.next);

    let elements = await response.json();
    setRequest(elements);
  }, [request]);

  const prevPage = useCallback(async () => {
    if (!request?.previous) return;
    let response = await fetch(request?.previous);

    let elements = await response.json();
    setRequest(elements);
  }, [request]);

  useEffect(() => {
    const handleStart = async () => {
      try {
        await AsyncStorage.getItem('names').then(result =>
          setLocalStorage(JSON.parse(result as string)),
        );
      } catch (e) {
        console.log(e);
      }
    };
    handleStart();
  }, []);

  const clearFans = useCallback(async () => {
    await AsyncStorage.removeItem('names');
    setLocalStorage(null);
  }, []);
  return (
    <View>
      <View style={styles.alignRight}>
        <Pressable style={styles.clearButton} onPress={clearFans}>
          <Text style={styles.buttonText}>Clear fans</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <GenderType gender="female" localStarage={localStarage}>
          Female Fans
        </GenderType>
        <GenderType gender="male" localStarage={localStarage}>
          Male Fans
        </GenderType>
        <GenderType gender="n/a" localStarage={localStarage}>
          Others
        </GenderType>
      </View>

      <View style={styles.inner}>
        {request &&
          request.results.map(item => (
            <UserName
              key={item.name}
              localStarage={localStarage}
              setLocalStorage={setLocalStorage}
              user={item}
            />
          ))}
      </View>

      <View style={{flexDirection: 'row', gap: 16, marginTop: 24}}>
        <Pressable
          style={[
            styles.button,
            !request?.previous ? styles.buttonDisabled : null,
          ]}
          disabled={!request?.previous}
          onPress={prevPage}>
          <ArrowLeftSvg />
        </Pressable>
        <Pressable
          style={[styles.button, !request?.next ? styles.buttonDisabled : null]}
          onPress={nextPage}>
          <ArrowRightSvg />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'red',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  alignRight: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  button: {
    padding: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },

  clearButton: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: 'red',
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  text: {
    fontSize: 14,
  },

  row: {
    flexDirection: 'row',
    gap: 10,
  },
  inner: {
    gap: 10,
    marginTop: 16,
  },
});

export default List;
