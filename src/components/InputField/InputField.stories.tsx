import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Default Input',
    placeholder: 'Type here...',
    clearable: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Invalid Input',
    invalid: true,
    errorMessage: 'Error entered',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    clearable: true,
    helperText: 'At least 6 characters',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Input',
    loading: true,
  },
};
