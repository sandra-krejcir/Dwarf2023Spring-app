import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { login } from './usersSlice'
import { UsersEntity } from './usersEntity'

export function Login() {
  const token: string | undefined = useSelector((state: RootState) => state.users.token)
  const error: string | undefined = useSelector((state: RootState) => state.users.error)
  const dispatch = useDispatch<AppDispatch>()

  const handleLoginSuccess = (event: any) => {
    event.preventDefault();
    console.log("login 1");

    dispatch(login(new UsersEntity('john', 'changeme')));
  }

  const handleLoginFailure = (event: any) => {
    event.preventDefault();

    dispatch(login(new UsersEntity('john', 'wrongpassword')));
  }

  return (
      <View>
          <Button title="Create success" onPress={handleLoginSuccess}/>
          <Button title="Create failure" onPress={handleLoginFailure}/>

          <Text>token is {token}</Text>
          <Text>{error}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });