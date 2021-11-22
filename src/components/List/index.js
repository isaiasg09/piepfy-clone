import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title} {data.done && <span>🙌</span>}</h2>

        {data.creatable && (
          <button>
            <MdAdd size={24} color='#FFF' />
          </button>)}
        
      </header>

      <ul>
        {data.cards.map((card, index) => <Card key={card.id} listIndex={listIndex} index={index} data={card}/>)}
      </ul>

    </Container>
  )
}
