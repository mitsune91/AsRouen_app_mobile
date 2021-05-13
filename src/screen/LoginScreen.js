import React from 'react';
import {Block, Accordion} from 'galio-framework';
export default function LoginScreen({navigation}) {
  const data = [
    {
      title: 'First Chapter',
      content: 'Lorem ipsum dolor sit amet',
      icon: {
        name: 'keyboard-arrow-up',
        family: 'material',
        size: 16,
      },
    },
    {title: '2nd Chapter', content: 'Lorem ipsum dolor sit amet'},
    {title: '3rd Chapter', content: 'Lorem ipsum dolor sit amet'},
  ];
  return (
    <Block style={{height: 200}}>
      <Accordion dataArray={data} />
    </Block>
  );
}
