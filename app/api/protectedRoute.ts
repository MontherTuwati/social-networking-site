import { protectRoute } from '@/lib/protect';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const session = await protectRoute(req);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, {status: 401});

    return NextResponse.json({ message: 'Protected content' });
}