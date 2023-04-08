import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(request:NextApiRequest, response: NextApiResponse) {
    try {
        switch (request.method.toUpperCase()) {
            case 'GET':
                const client = await clientPromise;
                const db = client.db('Pantry');
                const projection = { _id: 0 };
                const pantryItems = await db.collection('Frutas').find({}).project(projection).toArray();

                response.json(pantryItems);
                break;
        
            default:
                break;
        }
    } catch (error) {
        console.error(error.message);
    }    
}