import {appContainer, size} from '@/constants/dimens';
import {getScreenHeight} from '@/utils/screen';
import {StyleSheet} from 'react-native';

export const modalStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    minHeight: getScreenHeight() / 2,
    backgroundColor: 'cyan',
    borderTopLeftRadius: size.xl,
    borderTopRightRadius: size.xl,
    pointerEvents: 'box-none',
    padding: 10,
    paddingHorizontal: appContainer.horizontalPadding,
    gap: size.xs,
  },
});
