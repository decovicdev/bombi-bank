import {FlexStyle} from 'react-native'
import styled, { StyledComponent } from '@emotion/native';

interface PositionProps{ 
  pos?:FlexStyle['position']
  left?:FlexStyle['left'];
  right?:FlexStyle['right']
  top?:FlexStyle['top']
  bottom?:FlexStyle['bottom']
}



const withPosition = <T extends object> (Component:StyledComponent<T,any,any>)
:StyledComponent<T&PositionProps> =>{
  return  styled(Component)(({bottom,left,pos,right,top}:PositionProps)=>{
      return {
        position:pos,
        left,
        right,
        top,
        bottom
        
      }
    })
}

export default withPosition