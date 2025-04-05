import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

export function AddButton(actionType) {
  const { pending } = useFormStatus();
  return (
    <div className='flex items-center justify-center'>
      <Button className='mt-4' type='submit' disabled={pending}>
        {actionType === 'add' ? 'Add' : 'Edit'}
      </Button>
    </div>
  );
}

