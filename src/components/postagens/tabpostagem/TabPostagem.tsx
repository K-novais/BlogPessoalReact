import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Transformar sua casa em um refúgio acolhedor não precisa ser uma tarefa complicada. Com as dicas de decoração mencionadas,você pode criar um ambiente encantador que transmita conforto e acolhimento. Lembre-se de adaptar as ideias ao seu próprio estilo e preferências pessoais. Afinal, o objetivo é criar um espaço onde você se sinta em paz e feliz. Então, mãos à obra e comece a transformar sua casa em um verdadeiro lar!</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;