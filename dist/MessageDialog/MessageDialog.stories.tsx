import React from 'react';

import MessageDialog from './MessageDialog';

export default {
  title: 'Components/MessageDialog',
  component: MessageDialog,
  argTypes: {
    type: {
      name: 'type',
      type: { name: 'string', required: true },
      defaultValue: 'success',
      description: 'success/warning/error',
      control: {
        type: 'text',
      },
    },
    message: {
      name: 'message',
      type: { name: 'string', required: true },
      defaultValue: 'This is a success message',
      description: 'your message here',
      control: {
        type: 'text',
      },
    },
    btnText: {
      name: 'btnText',
      type: { name: 'string', required: true },
      defaultValue: 'OK',
      description: 'text inside your button',
      control: {
        type: 'text',
      },
    },
    show: {
      name: 'show',
      type: { required: true },
      defaultValue: true,
      description: 'show/hide message dialog',
    },
  },
};

const Template = (args: any) => <MessageDialog {...args} />;

export const Default = Template.bind({});
