import useAuth from "@/hook/auth.hook";
import { Role } from "@/types/enum.types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const withAuth = (Component: any, role: Role[]) => {
  return function ProtectedComponent(props: any) {
    const router = useRouter();
    const { isLoading, user } = useAuth();

    useEffect(() => {
      if (isLoading) {
        return;
      }

      if (!isLoading && !user) {
        toast.error("login required");
        router.replace("/login");
        return;
      }
      if (user && !role.includes(user.role)) {
        router.replace("/");
        toast.error("Unauthorized. you cannot access this page");
        return;
      }
    }, [router, user, isLoading]);

    if (isLoading) {
      return <div>Loading..</div>;
    }

    if (!user) {
      return null;
    }

    if (user && !role.includes(user.role)) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
