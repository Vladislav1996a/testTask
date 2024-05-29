import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const ArrowRightSvg: React.FC = () => {
  return (
    <Svg width="24" height="24">
      <Path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
    </Svg>
  );
};
