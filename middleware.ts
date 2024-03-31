import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  //: ============ CLERK AUTH ROUTES
  publicRoutes: ['/api/webhooks/clerk'],
  // Accessible routes, without authentication information
  // ignoredRoutes: ['/no-auth-in-this-route'],
});
 
export const config = {
  // Protects routes, including api/trpc.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};