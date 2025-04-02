'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

export async function addPet(formData) {
    await prisma.pet.create({
        data: {
            name: formData.get('name'),
            ownerName: formData.get('ownerName'),
            age: parseInt(formData.get('age')),
            imageUrl: formData.get('imageUrl') || 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=100&w=1970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            
            notes: formData.get('notes'),
        }
    })
    revalidatePath('/app/dashboard')
    redirect('/dashboard');
}