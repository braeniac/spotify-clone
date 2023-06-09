import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import logo from '../assets/fPuEa9V.png';

function Login({ providers }) {
  return (
    <div>
      <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
        <Image
          src={logo}  
          width={200}
          height={200}    
        />
        {
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button 
                className='bg-[#18D960] text-white p-5 rounded-full mt-5'
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Login with {provider.name}</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
