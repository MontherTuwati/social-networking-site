import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const session = await getSession({ req });
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await dbConnect();
    const user = await User.findById(session.user?.id);
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    return NextResponse.json(user);
}

export async function PUT(req: NextRequest) {
    const session = await getSession({ req });
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { firstName, lastName, email } = await req.json();
    await dbConnect();

    const user = await User.findById(session.user?.id)
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    await user.save();

    return NextResponse.json({ message: 'Profle updated', user });
}