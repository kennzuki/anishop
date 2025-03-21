import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

type ButtonProps = {
  actionType: 'add' | 'edit' | 'delete';
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function Buttons({ actionType,onClick,children }: ButtonProps) {
  if (actionType === 'add') {
      return <Button>
      <PlusIcon/>
    </Button>;
  }
  if (actionType === 'edit') {
    return <Button variant='secondary'>{children}</Button>;
  }
  if (actionType === 'delete') {
    return <Button variant='destructive'onClick={onClick}>{children} </Button>;
  }
  return (
    <div>
      <Button>{children}</Button>
    </div>
  );
}
