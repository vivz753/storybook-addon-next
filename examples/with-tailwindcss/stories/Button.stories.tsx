import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { defaultValue: 'Button', control: 'text' },
    href: { control: 'text' },
    size: { options: ['sm', 'full'] }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Solid = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Solid.args = {
  variant: 'solid',
  children: 'Solid'
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  children: 'Outlined'
}

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true
}

export const isSuccess = Template.bind({})
isSuccess.args = {
  isSuccess: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}
