import { View, Text, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import {images } from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false) 

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px] mx-auto"

          />

          <Text className="text-2xl text-white text-semibold mt-10 front-psemibold">
            Sign up to Aora
          </Text>

          <FormField
            title="Username"
            value={FormField.username}
            handleChangeText={(e) => setForm({ ...FormField, username: e})}
            otherStyles="mt-7"
          />

          <FormField
            title="Email"
            value={FormField.email}
            handleChangeText={(e) => setForm({ ...FormField, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={FormField.password}
            handleChangeText={(e) => setForm({ ...FormField, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular"> Have an Account already? </Text>
            <Link href="/sign-in"
              className="text-lg text-secondary-200 font-psemibold"
            >Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp