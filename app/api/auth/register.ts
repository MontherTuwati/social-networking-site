import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { hash } from 'argon2';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const { username, email, password } = await req.json();

        //Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await hash(password);

        //Create a new user
        const newUser = await User.create({ username, email, password});

        return NextResponse.json(newUser);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
    }
}