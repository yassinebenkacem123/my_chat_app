import prisma from '@/lib/client'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
    if(eventType === 'user.created'){
      try{
        const user =  await prisma.user.create({
          data:{
            id:evt.data.id,
            username:evt.data.first_name || '' + evt.data.last_name || '',
            avatar:evt.data.image_url || '/noAvatar.png',
            cover:'/noCover.png',
          }
        })
        console.log('New user created:', user);
        return new Response('User created', {status:200});

      }catch(err){
        console.error(err);
        return new Response('Error to creat the user!', {status:500});

      }
    }if(eventType === 'user.updated'){
      try{
        await prisma.user.update({
          where:{id:evt.data.id},
          data:{
            username:evt.data.username || '',
            avatar:evt.data.image_url || '/noAvatar.png',
          }
        })
        return new Response('User updated', {status:200});
      }catch(err){
        console.error(err);
        return new Response('Error to update the user!', {status:500});
      }
    }
  
    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}