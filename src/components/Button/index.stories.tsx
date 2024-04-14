import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Cmoponents/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'solid',
    size: 'md',
    colorscheme: 'primary'
  }
};

export const Outline: Story = {
  args: {
    children: 'Click me',
    variant: 'outline',
    size: 'md',
    colortheme: 'primary'
  }
};

export const Ghost: Story = {
  args: {
    children: 'Click me',
    variant: 'ghost',
    size: 'md'
  }
};
