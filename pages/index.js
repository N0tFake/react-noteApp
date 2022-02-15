import React from "react";
import styled from "styled-components";

import {Grid} from "../components/Grid/Grid";
import {Button} from "../components/Button/Button";
import {IconAdd} from "../components/Icons/Add";
import {CardNote} from "../components/CardNotes/CardNotes";
import {TextArea} from "../components/TextArea/TextArea";
import {BtnDelete} from "../components/CardNotes/BtnDelete";
import { BtnEdit } from "../components/CardNotes/BtnEdit";

import {IconTrash} from "../components/Icons/Trash";
import {IconEdit} from "../components/Icons/Edit"

import ThemesApp from "../config/themes.json";

export default function Home() {
 
  const [ text, setText ] = React.useState('');
  const [ length, setLength ] = React.useState(0);
  const [ notes, setNotes ] = React.useState([]);

  const [ hintTextArea, setHintTextArea ] = React.useState(true);
  const [ opcEdit, setopcEdit ] = React.useState(true);

  function handleNotesCreate(text){
    setHintTextArea(!hintTextArea);
    setLength(length + 1);
    const nota = {
      id: length,
      content: text,
    };
    setNotes([
      ...notes,
      nota
    ]);
    setText('');
  }

  function deleteNote(id){
    setNotes(
      (notes) => notes.filter((i) => i.id != id)
    )
  }

  return (
    <>

      <Background>
        <Container padding='1em'>
          <Title>Notas</Title>
        </Container>
        <Container padding='1em'> 
          { hintTextArea == false 
            ? <Container>
                <TextArea
                  value={text}
                  onChange={(e) => {
                    const value = e.target.value
                    setText(value);
                  }}
                  onKeyPress={(e) => {
                    /* if(e.key == 'Enter'){
                      let value = e.target.value;
                      value = value.replace("\r\n", "\\r\\n")
                      setText(value)
                    } */
                  }}
                />
              </Container> 
            : null
          }


          {/* <Button color={'red'} state={opcEdit} onClick={() => setopcEdit(!opcEdit)} > Testar </Button> */}

          {/* { opcEdit ? <Cont show={opcEdit}> teste </Cont> : null } */}

          { hintTextArea == true 
            ?  <Button radius='50px' color={ThemesApp.colors.background} onClick={() => setHintTextArea(!hintTextArea)}>
                Criar
                <IconAdd/>
              </Button> 
            : null }

          { hintTextArea == false 
            ? <Button radius='50px' color={ThemesApp.colors.cancel} onClick={() => setHintTextArea(!hintTextArea)}>
                Cancelar
              </Button> 
            : null }
          
          { hintTextArea == false 
            ? <Button radius='50px' color={ThemesApp.colors.background} onClick={() => handleNotesCreate(text)}>
              Adicionar
            </Button> 
            : null }

        </Container>

        <Container>
          <Grid>
            {notes.map( (data)=>{
              return(
                <CardNote key={data.id} >
                  <p id="p-card" >{
                    data.content
                  }</p>
                  <BtnEdit className="ButtonEdit"> <IconEdit /> </BtnEdit>
                  <BtnDelete className="ButtonDelete" onClick={ () => deleteNote(data.id) }><IconTrash /></BtnDelete>
                </CardNote>
              );
            }) }
          </Grid>
        </Container>


      </Background>

    </>
  )
}

const Background = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: ${props => props.padding};
  text-align: center;
`;

const Title = styled.text`
  color: white;
  font-size: 2em;
  font-weight:  bold;
`;