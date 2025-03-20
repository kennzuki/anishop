import { Button } from '@/components/ui/button';

type ButtonProps = {
  actionType: 'add' | 'edit' | 'delete';
};

export default function Buttons({ actionType }: ButtonProps) {
  if (actionType === 'add') {
      return <Button>
        +
    </Button>;
  }
  if (actionType === 'edit') {
    return <Button variant='secondary'>Edit</Button>;
  }
  if (actionType === 'delete') {
    return <Button variant='destructive'>Delete</Button>;
  }
  return (
    <div>
      <Button>Delete</Button>
    </div>
  );
}
