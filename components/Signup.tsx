"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { Input } from './ui/input'
import {Form} from 'antd'
import { useState } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './ui/input-otp'

const Signup = () => {
  const [sent, setSent] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const signup = (values: any) => {
    console.log('form values', values)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const verifyOTP = (values: any) => {
    console.log('OTP value', values)
  }

  return (
    <div className='bg-gray-100 h-screen overflow-hidden flex items-center justify-center animate__animated animate__fadeIn'>
      {
      sent ?
        <Card className='w-[450px] relative z-50 shadow-lg animate__animated animate__slideInUp animate__faster'>
          <CardHeader>
            <CardTitle className='text-4xl font-bold'>OTP Verification</CardTitle>
            <CardDescription>Check your mobile phone</CardDescription>
          </CardHeader>
          <CardContent>
            <Form onFinish={verifyOTP}>
              <Form.Item name="otp" rules={[{required: true}]}>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className='p-6'/>
                    <InputOTPSlot index={1} className='p-6'/>
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={2} className='p-6'/>
                    <InputOTPSlot index={3} className='p-6'/>
                  </InputOTPGroup>
                </InputOTP>
                
              </Form.Item>
              

            <Form.Item>
              <Button className='py-6 w-full text-base font-semibold bg-zinc-700 hover:bg-zinc-900'>
                <ArrowRight />
                Verify
              </Button>
            </Form.Item>
            </Form>
          </CardContent>
        </Card>
      :
        <Card className='w-[450px] relative z-50 shadow-lg animate__animated animate__slideInUp animate__faster'>
          <CardHeader>
            <CardTitle className='text-4xl font-bold'>Register now</CardTitle>
            <CardDescription>Signup to use services</CardDescription>
          </CardHeader>
          <CardContent>
            <Form onFinish={signup}>
              <Form.Item name="fullname" rules={[{required: true}]}>
                <Input 
                  placeholder='What is your name'
                  className='py-7'
                />
              </Form.Item>

            <Form.Item name="mobile" rules={[{required: true}]}>
              <PhoneInput 
                country={'in'}
                inputClass='!w-full'
              />
            </Form.Item>

            <Form.Item>
              <Button className='py-6 w-full text-base font-semibold bg-zinc-700 hover:bg-zinc-900'>
                <ArrowRight />
                Next
              </Button>
            </Form.Item>
            </Form>
          </CardContent>
        </Card>
      }
      <div className='bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 w-[1080px] h-[1080px] fixed rounded-full left-1/2 transform -translate-x-1/2 -bottom-[700px]'>
      </div>
    </div>
  )
}

export default Signup