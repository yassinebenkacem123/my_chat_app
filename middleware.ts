import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Protect only the home route
const isProtectedRoute = createRouteMatcher(['/']);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  if (isProtectedRoute(req) && !userId) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }
});

export const config = {
  matcher: [
    '/((?!.+\\..+|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
};