import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const session = await getSession({ req });
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { unfollowId } = await req.json();
    await dbConnect();

    const user = await User.findById(session.user.id);
    const unfollowUser = await User.findById(unfollowId);

    if (!unfollowUser) return NextResponse.json({ error: 'User to follow not found' }, { status: 404 });

    const index = user.following.indexOf(unfollowId);
    if (index > -1) {
        await user.save();
        return NextResponse.json({ message: 'User unfollowed' });
    }

    return NextResponse.json({ error: 'Already following this user' }, {status: 400});
}