import CustomColors from '../../../constants/colors';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: CustomColors.White,
    width: '33%',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'ubuntu',
    fontWeight: '300',
    fontSize: 12,
    color: CustomColors.Black,
  },
  line: {
    borderWidth: 0.5,
    borderColor: CustomColors.LightBlack,
    width: '100%',
  },
});
