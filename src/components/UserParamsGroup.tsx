import {StyleSheet, Text, View} from 'react-native';

type UserParamsGroupProps = {
  title: string;
  userParams?: string[];
};

export const UserParamsGroup: React.FC<UserParamsGroupProps> = ({
  title,
  userParams,
}) => {
  if (!userParams) return;
  return (
    <View style={styles.wrap}>
      <Text>{title}:</Text>
      {userParams.map(item => (
        <Text key={item}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 8,
  },
});
