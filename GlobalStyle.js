import styled, {createGlobalStyle, css} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background: #f3f3f3f3;
  }

  body, button, input {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid #cccccccc;
`

export const Title = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 700;
`

export const Table = styled.table`
  padding: 1rem;

  display: table;
  border-collapse: collapse;
`

export const TableTd = styled.td`
  text-align: left;
  border-top: 1px #dddddd solid;
  padding: 1rem;
`

export const Action = styled(TableTd)`
  display: flex;
  gap:.5rem;
`

export const EditStyledButton = styled.button`
  border: none;
  padding: .5rem .7rem;
  border-radius: 4px;

  background: #FEDB39;
`

export const DeleteStyledButton = styled(EditStyledButton)`
  background: #CF0A0A;
  color: #f3f3f3f3;
`

export const WarningText = styled.h1`
  padding: 1rem;
  font-weight: 900;
  color: #CF0A0A;
`

export const PopupEdit = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`