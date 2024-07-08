export type SearchInputProps = {
    label: string;
    onChangeText?: (text: string) => void;
    value?: string;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';

}