import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgrond};
`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  padding-bottom: ${getStatusBarHeight() + RFValue(30)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const BombMessage = styled.Text`
  font-size: ${RFValue(20)}px;
  margin: ${RFValue(30)}px 0;
  margin-bottom: ${RFValue(50)}px;
  text-align: center;
  color: #ff0044;
`;
