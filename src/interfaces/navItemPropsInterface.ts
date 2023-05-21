export interface NavItemProps {
  text: string;
  type?: 'default' | 'button';
  to?: string;
  dropdownComponent?: React.FC;
  leftIcon?: React.FC;
}
