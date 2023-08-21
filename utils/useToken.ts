import { useSession } from "next-auth/react";

export default function useToken() {
  const { data: session } = useSession();
  const token = session?.user?.accessToken || null;
  return [token];
  //   if (token) {
  //     return [token];
  //   } else {
  //     return null;
  //   }
}
