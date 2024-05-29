import {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserLocalStorage} from '../types';

type GenderTypeProps = {
  children: React.ReactNode;
  gender: string;
  localStarage: UserLocalStorage[] | null;
};

export const GenderType: React.FC<GenderTypeProps> = ({
  children,
  gender,
  localStarage,
}) => {
  const count = useMemo(() => {
    if (!localStarage) return 0;
    return localStarage.filter(item => item.gender === gender).length;
  }, [localStarage]);
  return (
    <View style={styles.wrap}>
      <Text>
        {count} {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
