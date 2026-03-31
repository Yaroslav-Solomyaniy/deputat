import React, { forwardRef, type ComponentRef } from 'react'; // Добавили ComponentRef
import {
    KeyboardAwareScrollView,
    type KeyboardAwareScrollViewProps
} from 'react-native-keyboard-controller';
import { withUniwind } from 'uniwind';

const StyledKeyboardScroll = withUniwind(KeyboardAwareScrollView);
type KeyboardAwareScrollViewRef = ComponentRef<typeof KeyboardAwareScrollView>;

interface ScreenWrapperProps extends KeyboardAwareScrollViewProps {
    children: React.ReactNode;
    className?: string;
    contentContainerClassName?: string;
}

export const ScreenWrapper = forwardRef<KeyboardAwareScrollViewRef, ScreenWrapperProps>(
    ({ children, className = '', contentContainerClassName = '', ...props }, ref) => {
        return (
            <StyledKeyboardScroll
                ref={ref}
                bottomOffset={100}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
                className={`flex-1 ${className}`.trim()}
                contentContainerClassName={`grow ${contentContainerClassName}`.trim()}
                {...props}
            >
                {children}
            </StyledKeyboardScroll>
        );
    }
);

export default ScreenWrapper;