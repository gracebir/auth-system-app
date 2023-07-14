import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import { AppContext } from '@/context/userContext';

function IsAuth<T>(Component: React.ComponentType<T>) {
    return (props: T) => {
        const {user} = useContext(AppContext)
        const router = useRouter();

        if (!user) {
            router.push('/');
        }

        return (
            <>
                <Component {...props!} />
            </>
        );
    };
}


export default IsAuth
