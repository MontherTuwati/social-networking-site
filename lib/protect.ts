import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export const protectRoute = async (req: NextRequest) => {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    if (!token) {
        // Return null if no token is found (unauthorized)
        return null;
    }

    return token;
};
