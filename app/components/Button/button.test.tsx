import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import { Button } from './Button';

describe('Button Component', () => {
  it('should render component', () => {
    const mockPressHandler = jest.fn();
    let rendered: ReactTestRenderer;

    act(() => {
      rendered = create(
        <Button type="primary" text="Test" onPress={mockPressHandler} />,
      );
    });

    const button = rendered!.root.findByType(TouchableOpacity);
    const buttonText = rendered!.root.findByType(Text);

    expect(button).toBeDefined();
    expect(buttonText.props.children).toEqual('Test');
  });

  it('should call onPress once pressed', () => {
    const mockPressHandler = jest.fn();
    let rendered: ReactTestRenderer;

    act(() => {
      rendered = create(
        <Button type="primary" text="Test" onPress={mockPressHandler} />,
      );
    });

    const button = rendered!.root.findByType(TouchableOpacity);
    act(() => button.props.onPress());

    expect(mockPressHandler).toHaveBeenCalledTimes(1);
  });
});
