import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in",
  "/sign-up",
  "/",
  "/about(.*)",
  "/info(.*)",
  "/branches(.*)",
  "/profile(.*)",
  "/events(.*)",
  "/contact(.*)",
  "/assets(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const currentUrl = new URL(req.url);

  const isAccessingStudentPortal = currentUrl.pathname.startsWith("/students");
  const isSignIn = currentUrl.pathname.startsWith("/sign-in");

  if (userId && isPublicRoute(req) && !isAccessingStudentPortal) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  //not logged in
  if (!userId) {
    if (!isPublicRoute(req)) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
