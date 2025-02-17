import * as AC from '@bacons/apple-colors';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { HeaderButton } from './ui/Header';
import { IconSymbol } from './ui/IconSymbol';

interface ChatToolbarInnerProps {
  onSend?: (text: string) => void;
  onClear?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatToolbarInner({
  onSend,
  onClear,
  value = '',
  onChangeText,
  placeholder = 'Type a message...',
  disabled,
}: ChatToolbarInnerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={AC.secondaryLabel}
          multiline
          editable={!disabled}
        />
      </View>
      <View style={styles.buttons}>
        {value.length > 0 && (
          <HeaderButton onPress={() => onSend?.(value)} disabled={disabled}>
            <IconSymbol
              name="arrow.up.circle.fill"
              size={24}
              color={AC.systemBlue}
            />
          </HeaderButton>
        )}
        {onClear && (
          <HeaderButton onPress={onClear} disabled={disabled}>
            <IconSymbol name="trash" size={24} color={AC.systemRed} />
          </HeaderButton>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 8,
    backgroundColor: AC.systemBackground,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: AC.separator,
  },
  inputContainer: {
    flex: 1,
    marginRight: 8,
    backgroundColor: AC.secondarySystemBackground,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 40,
  },
  input: {
    fontSize: 16,
    color: AC.label,
    maxHeight: 100,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
