import React from "react";
import AuthProvider from "./auth.provider";
import QueryProvider from "./react-query.provider";
import WishlistProvider from "./wishlists.provider";

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryProvider>
      <AuthProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </AuthProvider>
    </QueryProvider>
  );
};

export default Providers;
