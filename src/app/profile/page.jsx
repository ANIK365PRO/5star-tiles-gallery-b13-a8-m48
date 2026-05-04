'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';


const ProfilePage = () => {
        const { data: session , isPending } = authClient.useSession()
            const user = session?.user
            console.log(user, isPending, 'nav session user')

    return (
        <div>
           
            <div className='card max-w-md mx-auto flex items-center gap-3 justify-center px-5 py-20 my-10 md:my16 lg:my-20 bg-white/15 border border-zinc-100/50 backdrop-blur-3xl shadow-lg'>
                <Avatar className='h-16 w-16'>
                        <Avatar.Image
                                              alt="Blue"
                                              src={user?.image}
                                              referrerPolicy="no-referrer"
                                            />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className='text-xl font-bold'>{user?.name}</h2>
                <p className='text-lg font-bold'>{user?.email}</p>


            </div>


        </div>
    );
};

export default ProfilePage;