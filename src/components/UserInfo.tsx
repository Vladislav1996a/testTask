import {StyleSheet, Text, View} from 'react-native';
import {UserParamsGroup} from './userParamsGroup';

type UserInfoProps = {
  title: string;
  userParams: string[] | string;
};

export const UserInfo: React.FC<UserInfoProps> = ({title, userParams}) => {
  if (!userParams) return;

  return (
    <View style={styles.wrap}>
      <Text>
        {title}: {userParams}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 8,
  },
});
