import { NextResponse } from 'next/server';

import { connect } from '../../../utils/db';
import Cert from '../../models/Cert';

export const GET = async (request) => {
    try {
        await connect(); 

        const posts = await Cert.find();

        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error("Error in connecting to the database:", error);
        return new NextResponse("Error in connecting to the database", { status: 500 });
    }
}
