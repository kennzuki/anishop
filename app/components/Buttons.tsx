'use client'
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AddForm } from './AddForm';
import { useState } from 'react';


type ButtonProps = {
  actionType: 'add' | 'edit' | 'delete';
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function Buttons({ actionType, onClick, children }: ButtonProps) {

  const [isFormOpen, setIsFormOpen] = useState(false);
  
  if (actionType === 'delete') {
    return <Button variant='destructive'onClick={onClick}>{children} </Button>;
  }

  if (actionType === 'add'|| actionType === 'edit') {
    return (
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogTrigger asChild>
          {
    actionType === 'add' ? <Button >{children} <PlusIcon size={24} /></Button> : <Button variant='secondary'>{children}</Button>
          }
  </DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>{actionType==='add'?'Add new Animal':'Edit new Animal'}</DialogTitle></DialogHeader>
          <AddForm actionType={actionType} onFormSubmission={()=>setIsFormOpen(false)}/>
        </DialogContent>
      </Dialog>)
  }
  
 
 
}
