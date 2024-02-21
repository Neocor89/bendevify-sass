import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Clerck authenticated routes
  publicRoutes: ['/anyone-can-visit-this-route'],
  // Accessible routes, without authentication information
  ignoredRoutes: ['/no-auth-in-this-route'],
});
 
export const config = {
  // Protects routes, including api/trpc.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};