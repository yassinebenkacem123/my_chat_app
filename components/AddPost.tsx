import React from 'react'
import Image from "next/image";
import { SendHorizontal, SmilePlus } from 'lucide-react';
import { options } from '@/lib/inedx';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/client';
const AddPost = async () => {
    const {userId} = await auth();
    async function formAction (formData:FormData){
        "use server"
        const description = formData.get('description') as string;
        if(!userId) return;
        try{
            const res = await prisma.post.create({
                data:{
                    description,
                    userId:userId
                }
            })
            console.log(res);
        }catch(err){
            console.error(err)
        }

    }
  return (
    <div className='w-full flex-col  my-6 p-4 shadow-white/20 not-dark:shadow-black/20 shadow-[0_1px_7px_0px]  rounded-md'>
        <form  action={formAction} className='flex relative w-full items-start gap-4 mb-4'>
            <div className='w-15 h-15 rounded-full overflow-hidden  border border-amber-400 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>
                <Image src='https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww' alt="Avatar" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <div className='w-[90%]'>
                <textarea 
                name="description"
                className='w-full bg-gray-300/12 not-dark:bg-gray-300/27 outline-none rounded-sm  p-3 resize-none' placeholder='What is on your mind ?'></textarea>
            </div>
            <button type="button" title="add emojis" className='relative top-8 cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out'>
                <SmilePlus  size={30}/> 
            </button>
            
        </form>
        {/* option */}
        <div className='flex w-full justify-center gap-7 items-center'>
            { 
            options.map((option,index)=>(
                <div key={index} className='flex items-center gap-2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>
                    <Image src={option.path} alt={option.name} width={20} height={20} />
                    <span className='capitalize text-gray-300 not-dark:text-gray-500 text-sm'>{option.name}</span>
                </div>
                ))
            }
            <button className='ml-auto  px-4 py-2 rounded-md  font-semibold hover:scale-110 duration-150 cursor-pointer transition-all items-center gap-2'>
                <SendHorizontal />
            </button>
        </div>

    </div>
  )
}

export default AddPost