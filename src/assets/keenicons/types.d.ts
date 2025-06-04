export type TKeenIconsStyle = 'duotone' | 'filled' | 'solid' | 'outline';

export interface IKeenIconsProps {
  icon: string | null | undefined;
  style?: TKeenIconsStyle;
  className?: string;
}
