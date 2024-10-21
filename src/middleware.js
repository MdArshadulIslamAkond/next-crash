import { NextResponse } from "next/server";

export const middleware = (request) => {
  // console.log(request);
  
  const response = NextResponse.next()
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");
  return response;
  // conditional statements
  //   if ((request.nextUrl.pathname === "/blogs")) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  //   return NextResponse.redirect(new URL('/login', request.url));
};

// Coustom matcher configuration
// export const config = {
//   matcher: ["/blogs/:path*"],
// };
