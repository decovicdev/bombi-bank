import styled from '@emotion/native';
import withFlex from '../../../hoc/withFlex';
import withFont from '../../../hoc/withFont';
import withSize from '../../../hoc/withSize';
import withSpacing from '../../../hoc/withSpacing';

const Input = withSize(withSpacing(withFlex(withFont(styled.TextInput({})))));

export default Input;
