import React from 'react';
import {StackActions} from '@react-navigation/routers';
export const ref = React.createRef();
export function navigation(name,params){
    ref.current?.navigate(name,params);
}
export function push(name,params){
    ref.current?.dispatch(StackActions.push(name,params));
}

export function back({name,params}){
    ref.current?.dispatch(StackActions.pop(name))
}