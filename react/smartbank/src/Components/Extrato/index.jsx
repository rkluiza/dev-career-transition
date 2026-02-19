import React from 'react';
import { Box, Botao } from '../UI';
import {extratoLista} from '../../info';
import Items from '../Items';

 const Extrato = () => {
    
    
    return (
        <Box>
            {
                extratoLista.map(({id, type, from, value, date}) => {
                    return (
                        <><div key={id}>
                            <div>
                                {type}
                            </div>
                        </div><Items key={id} type={type} from={from} value={value} date={date}></Items></>
                    )
                })
            }

            <Botao>Ver mais</Botao>

        </Box>
    )};

    export default Extrato;