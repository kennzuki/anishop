'use client'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useAniContext } from '../(app)/dashboard/hooks';
import { addPet } from '../actions';


type AddFormProps = {
  actionType: 'add' | 'edit';
  onFormSubmission:()=>void
};

export const AddForm = ({ actionType, onFormSubmission }: AddFormProps,) => {
  
    const{selectedAniId}=useAniContext()
  

  return (
    <form action={addPet}  className='spacey4'>
      <Label className='font-bold' htmlFor='name'>
        Name
      </Label>
      <Input id='name' name='name' type='text' required defaultValue={actionType==='edit'?selectedAniId?.name:''}/>

      <Label className='font-bold' htmlFor='ownerName'>
        owner Name
      </Label>
      <Input id='ownerName' name='ownerName' type='text' required defaultValue={actionType==='edit'?selectedAniId?.ownerName:''} />

      <Label className='font-bold' htmlFor='imageUrl'>
        ImageUrl
      </Label>
      <Input id='imageUrl' name='imageUrl' type='text' defaultValue={actionType==='edit'?selectedAniId?.imageUrl:''} />

      <Label className='font-bold' htmlFor='age'>
        Age
      </Label>
      <Input id='age' name='age' type='text' required defaultValue={actionType==='edit'?selectedAniId?.age:''}/>

      <Label className='font-bold' htmlFor='notes'>
        Notes
      </Label>
      <Textarea id='notes' name='notes' required defaultValue={actionType==='edit'?selectedAniId?.notes:''}/>

      <Button className='mt-4' type='submit'>
        {actionType === 'add' ? 'Add' : 'Edit'}
      </Button>
    </form>
  );
};
