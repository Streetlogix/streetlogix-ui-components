import React from 'react';

import ConfirmationDialog from './ConfirmationDialog';

export default {
  title: 'Components/ConfirmationDialog',
  component: ConfirmationDialog,
  argTypes: {
    message: {
      name: 'message',
      type: { name: 'string', required: true },
      defaultValue: 'Would you like to save before leaving?',
      description: 'your message here',
      control: {
        type: 'text',
      },
    },
    confirmBtnText: {
      name: 'confirmBtnText',
      type: { name: 'string', required: true },
      defaultValue: 'SAVE',
      description: 'text inside your confirm button',
      control: {
        type: 'text',
      },
    },
    cancelBtnText: {
      name: 'cancelBtnText',
      type: { name: 'string', required: true },
      defaultValue: 'CANCEL',
      description: 'text inside your cancel button',
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

const Template = (args: any) => <ConfirmationDialog {...args} />;

export const Default = Template.bind({});
