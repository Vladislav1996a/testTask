import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const ArrowLeftSvg: React.FC = () => {
  return (
    <Svg width="24" height="24">
      <Path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
    </Svg>
  );
};
