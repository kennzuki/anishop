'use client'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useAniContext } from '../app/dashboard/hooks';
import { parse } from 'path';

type AddFormProps = {
  actionType: 'add' | 'edit';
};

export const AddForm = ({ actionType }: AddFormProps) => {
    const{handleAddAnimal}=useAniContext()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
      const newAni = {
      name: formData.get('name') as string,
      OwnerName: formData.get('ownerName') as string,
      imageUrl: formData.get('imageUrl') as string,
      age: +(formData.get('age') as string),
      notes: formData.get('notes') as string,
    }
      handleAddAnimal(newAni);
  };

  return (
    <form onSubmit={handleSubmit} className='spacey4'>
      <Label className='font-bold' htmlFor='name'>
        Name
      </Label>
      <Input id='name' name='name' type='text' required />

      <Label className='font-bold' htmlFor='ownerName'>
        owner Name
      </Label>
      <Input id='ownerName' name='ownerName' type='text' required />

      <Label className='font-bold' htmlFor='imageUrl'>
        ImageUrl
      </Label>
      <Input id='imageUrl' name='imageUrl' type='text' />

      <Label className='font-bold' htmlFor='age'>
        Age
      </Label>
      <Input id='age' name='age' type='text' required/>

      <Label className='font-bold' htmlFor='notes'>
        Notes
      </Label>
      <Textarea id='notes' name='notes' required />

      <Button className='mt-4' type='submit'>
        {actionType === 'add' ? 'Add' : 'Edit'}
      </Button>
    </form>
  );
};
