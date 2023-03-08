import {useState} from 'react'

import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [initialState, setState] = useState('')
  const onChangeState = event => setState(event.target.value)

  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        value={initialState}
        onChange={onChangeState}
      />
      <MsgContent>
        Hello <NameText>{initialState}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
