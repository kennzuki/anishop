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


type ButtonProps = {
  actionType: 'add' | 'edit' | 'delete';
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function Buttons({ actionType, onClick, children }: ButtonProps) {
  
  if (actionType === 'delete') {
    return <Button variant='destructive'onClick={onClick}>{children} </Button>;
  }

  if (actionType === 'add'|| actionType === 'edit') {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {
    actionType === 'add' ? <Button >{children} <PlusIcon size={24} /></Button> : <Button variant='secondary'>{children}</Button>
          }
  </DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>{actionType==='add'?'Add new Animal':'Edit new Animal'}</DialogTitle></DialogHeader>
          <AddForm actionType={actionType} />
        </DialogContent>
      </Dialog>)
  }
  
 
 
}
