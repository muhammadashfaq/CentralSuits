import React from 'react';
import {Svg, Circle, G, Path} from 'react-native-svg';

const CircularChart = ({part1, part2, part3}) => {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const part1Angle = part1 * 3.6; // Convert percentage to angle
  const part2Angle = part2 * 3.6;
  const part3Angle = part3 * 3.6;

  return (
    <Svg width="200" height="200">
      <Circle
        cx="100"
        cy="100"
        r={radius}
        fill="transparent"
        strokeWidth="10"
        stroke="#ccc"
      />
      <G transform={`rotate(-90, 100, 100)`}>
        <Path
          d={`M 100 100 L ${100 + radius} 100 A ${radius} ${radius} 0 ${
            part1Angle > 180 ? 1 : 0
          } 1 ${100 + radius * Math.cos((part1Angle * Math.PI) / 180)} ${
            100 + radius * Math.sin((part1Angle * Math.PI) / 180)
          } Z`}
          fill="#f00"
        />
        <Path
          d={`M 100 100 L ${100 + radius} 100 A ${radius} ${radius} 0 ${
            part2Angle > 180 ? 1 : 0
          } 1 ${
            100 + radius * Math.cos(((part1Angle + part2Angle) * Math.PI) / 180)
          } ${
            100 + radius * Math.sin(((part1Angle + part2Angle) * Math.PI) / 180)
          } Z`}
          fill="#0f0"
        />
        <Path
          d={`M 100 100 L ${100 + radius} 100 A ${radius} ${radius} 0 ${
            part3Angle > 180 ? 1 : 0
          } 1 ${
            100 +
            radius *
              Math.cos(((part1Angle + part2Angle + part3Angle) * Math.PI) / 180)
          } ${
            100 +
            radius *
              Math.sin(((part1Angle + part2Angle + part3Angle) * Math.PI) / 180)
          } Z`}
          fill="#00f"
        />
      </G>
    </Svg>
  );
};
export {CircularChart};
