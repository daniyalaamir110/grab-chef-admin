// 'use client';
// // React and Next
// import {
//   createContext,
//   SetStateAction,
//   useContext,
//   useEffect,
//   useState,
// } from 'react';

// // Services

// // Types
// import ScreenLoader from '@/common/components/screen-loader';
// import { me } from '@/common/services/queries/profile.query';
// import { User } from '@/common/types/user';
// import { getCookie } from 'cookies-next';

// // Utils

// // Components

// // Interface
// interface Session {
//   user: User | null;
//   setUser: React.Dispatch<SetStateAction<User | null>>;
//   invalidate: boolean;
//   setInvalidate: React.Dispatch<SetStateAction<boolean>>;
// }

// export const SessionContext = createContext<Session | null>(null);

// const SessionProvider = ({ children }: { children: React.ReactNode }) => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [user, setUser] = useState<User | null>(null);
//   const [invalidate, setInvalidate] = useState<boolean>(false);

//   const fetchUser = async () => {
//     try {
//       const data = await me();

//       if (data && data?.id) {
//         setUser(data);
//         setLoading(true);
//       }
//     } catch (error) {
//       console.log('Session user error: ', error);
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const accessToken = getCookie('accessToken');

//   useEffect(() => {
//     if (accessToken) {
//       fetchUser();
//     }
//   }, [accessToken]);

//   if (loading) {
//     return <ScreenLoader />;
//   }

//   return (
//     <SessionContext.Provider
//       value={{ user, setUser, invalidate, setInvalidate }}
//     >
//       {children}
//     </SessionContext.Provider>
//   );
// };

// export default SessionProvider;

// export const useSession = () => {
//   const session = useContext(SessionContext);

//   if (!session) {
//     // console.log('Session provider is not initialized');
//     throw new Error('Session provider is not initialized');
//   }

//   return session;
// };
