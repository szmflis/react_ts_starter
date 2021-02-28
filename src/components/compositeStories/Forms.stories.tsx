import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Caption, Title } from '../Typography/Typography'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { Checkbox } from '../Checkbox/Checkbox'
import { validateString } from '../../utils/stringValidation'
import { Switch } from '../Switch/Switch'
import { regExList } from '../../utils/stringValidation'

storiesOf('Composites/Forms', module).add('Form1', () => {
  const [usernameInput, setUsernameInput] = useState('')
  const [usernameValid, setUsernameValid] = useState(false)
  const [usernameTouched, setUsernameTouched] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordValid, setPasswordValid] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)

  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)

  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  const [switch1, setSwitch1] = useState(false)

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const usrnameValue = event.target.value
    setUsernameInput(usrnameValue)
    setUsernameValid(validateString(usrnameValue, 3, 23, regExList.username))
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const usrnameValue = event.target.value
    setPassword(usrnameValue)
    setPasswordValid(validateString(usrnameValue, 3, 23, regExList.password))
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const usrnameValue = event.target.value
    setEmail(usrnameValue)
    setEmailValid(validateString(usrnameValue, 3, 23, regExList.email))
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Flex p={5} width="100vw" centerContent>
      <Flex flexDirection="column" m={5} p={6} width={9} bg="white" boxShadow="mdShadow_1">
        <form onSubmit={handleFormSubmit}>
          <Title pb={5}>Some kind of form</Title>

          <Input
            value={usernameInput}
            onChange={handleUsernameChange}
            py={5}
            placeholder="Login"
            valid={usernameValid}
            touched={usernameTouched}
            onBlur={() => setUsernameTouched(true)}
            required
            maxLength={23}
            minLength={3}
            title="Username with letters, numbers, no space."
          />
          <Input
            value={password}
            onChange={handlePasswordChange}
            py={5}
            placeholder="Password"
            valid={passwordValid}
            touched={passwordTouched}
            onBlur={() => setPasswordTouched(true)}
            required
            maxLength={23}
            minLength={3}
            title="Password with letters, numbers, no space."
            type="password"
          />
          <Input
            value={email}
            onChange={handleEmailChange}
            py={5}
            placeholder="someone@gmail.com"
            valid={emailValid}
            touched={emailTouched}
            onBlur={() => setEmailTouched(true)}
            required
            maxLength={23}
            minLength={3}
            title="Email with letters, numbers, no space."
            type="email"
          />
          <Switch checked={switch1} onChange={() => setSwitch1(!switch1)} py={5} label="Make account private " />
          <Checkbox
            label="This would say something about accepting some other thing"
            py={5}
            checked={check1}
            onChange={() => setCheck1(!check1)}
          />
          <Checkbox
            label="This would be extreamly long and noone would ever read it. Most modern browsers support this, but for older browsers, vendor prefixes will be required."
            py={5}
            checked={check2}
            onChange={() => setCheck2(!check2)}
          />

          <Flex pt={5} pb={3}>
            <Button variant="primary" icon="doneAll" type="submit" />
            <Button variant="cancel" icon="delete" type="reset" />
          </Flex>
        </form>
      </Flex>
      <Flex flexDirection="column" m={5} p={5} width={9} bg="white" boxShadow="mdShadow_1">
        <Title py={3}>Username Input: </Title>
        <Caption py={3} fontSize={3}>
          usernameInput: {usernameInput}
        </Caption>
        <Caption py={3} fontSize={3}>
          usernameValid: {`${usernameValid}`}
        </Caption>
        <Caption py={3} fontSize={3}>
          usernameTouched: {`${usernameTouched}`}
        </Caption>

        <Title py={3}>Password Input: </Title>
        <Caption py={3} fontSize={3}>
          passwordInput: {password}
        </Caption>
        <Caption py={3} fontSize={3}>
          passwordValid: {`${passwordValid}`}
        </Caption>
        <Caption py={3} fontSize={3}>
          passwordTouched: {`${passwordTouched}`}
        </Caption>

        <Title py={3}>Email Input: </Title>
        <Caption py={3} fontSize={3}>
          emailInput: {email}
        </Caption>
        <Caption py={3} fontSize={3}>
          emailValid: {`${emailValid}`}
        </Caption>
        <Caption py={3} fontSize={3}>
          emailTouched: {`${emailTouched}`}
        </Caption>
      </Flex>
    </Flex>
  )
})
