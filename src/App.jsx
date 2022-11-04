import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styled from 'styled-components'
import StylesButton from './components/Button/Button'
import { Action, Container, DeleteStyledButton, EditStyledButton, GlobalStyle, PopupEdit, Table, TableTd, Title, UserWrapper, WarningText } from '../GlobalStyle'
import { UserData } from './components/UserData/UserData'
import { UserStyledData } from './components/UserData/UserData.style'
import StyledButton from './components/Button/Button'

export function App() {
  let users2 = [
    {id:21, first:'Jose', last:'goncalves', email:'josegoncalves0gmail.com', phone:983302832, location:'Angola', hobby:'Software engineer',  action: <Action><EditStyledButton>Edit</EditStyledButton><DeleteStyledButton onClick={() => deleteUser(1)}>Del</DeleteStyledButton></Action>},
    {id:22, first:'Samuel', last:'Augusto', email:'josegoncalves0gmail.com', phone:983302832, location:'Angola', hobby:'Software engineer',  action: <Action><EditStyledButton>Edit</EditStyledButton><DeleteStyledButton onClick={() => deleteUser(2)}>Del</DeleteStyledButton></Action>},
    {id:23, first:'Edson', last:'Rodrigues', email:'josegoncalves0gmail.com', phone:983302832, location:'Angola', hobby:'Software engineer', action: <Action><EditStyledButton>Edit</EditStyledButton><DeleteStyledButton onClick={() => deleteUser(3)}>Del</DeleteStyledButton></Action>}
  ]

  let users = [
    {id:1, first:'Jose', last:'goncalves', email:'josegoncalves0gmail.com', phone:983302832, location:'Angola', hobby:'Software engineer'},
    {id:2, first:'Samuel', last:'Augusto', email:'josegoncalves0gmail.com', phone:983302832, location:'Angola', hobby:'Software engineer'},
    {id:3, first:'Edson', last:'Rodrigues', email:'josegoncalves0gmail.com', phone:983302832, location:'Angola', hobby:'Software engineer'}
  ]
  let [user, setUser] = useState(users)

  function deleteUser(id){
    users = user.filter(u => u.id != id)
    setUser(users)
    //console.log(users)
  }

  return (
    <Container>
      <Title>CRUD Database</Title>
      <UserWrapper>
        {
          user.length > 0 ?
          <Table>
            <thead>
              <tr key="header">
                {
                  Object.keys(users2[0]).map(key => (
                    <TableTd as='th'>{key}</TableTd>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                user.map(item => (
                  <tr key={item.id}>
                    {Object.values(item).map(val => (
                        <UserData val={val}/>
                    ))}
                    <Action><EditStyledButton>Edit</EditStyledButton> <DeleteStyledButton onClick={() => deleteUser(item.id)}>Del</DeleteStyledButton> </Action>
                  </tr>
                ))}
            </tbody>
          </Table>
          :
          <WarningText>No data to show</WarningText>
        }


      </UserWrapper>
      <GlobalStyle />
    </Container>
  )
}

/*

  Object.keys(user[0]).map(key => {
    console.log(key)
  })

*/