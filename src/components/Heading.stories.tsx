
import {Heading,HeadingProps} from './Heading';
import {Meta, StoryObj} from '@storybook/react';

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: 'Lorem ipsum.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>


export const Default: StoryObj<HeadingProps> = {}

export const Large: StoryObj = {
  args: {
    size: 'lg'
  }
};

export const Small: StoryObj = {
  args: {
    size: 'sm'
  }
}

export const CustomComponent: StoryObj = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with P</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
};