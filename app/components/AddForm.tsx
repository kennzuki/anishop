'use client'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useAniContext } from '../app/dashboard/hooks';


type AddFormProps = {
  actionType: 'add' | 'edit';
  onFormSubmission:()=>void
};

export const AddForm = ({ actionType,onFormSubmission }: AddFormProps,) => {
    const{handleAddAnimal,selectedAniId,handleEditPet}=useAniContext()
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
      const ani = {
      name: formData.get('name') as string,
      OwnerName: formData.get('ownerName') as string,
      imageUrl: formData.get('imageUrl') as string,
      age: +(formData.get('age') as string),
      notes: formData.get('notes') as string,
    }
    if (actionType === 'add') {
      handleAddAnimal(ani);
    } else if(actionType==='edit') {
     handleEditPet(selectedAniId!.id,ani)
    }
    onFormSubmission()
  };

  return (
    <form onSubmit={handleSubmit} className='spacey4'>
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
