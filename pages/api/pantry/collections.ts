import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(request:NextApiRequest, response: NextApiResponse) {
    try {
        switch (request.method.toUpperCase()) {
            case 'GET':
                const client = await clientPromise;
                const db = client.db('Pantry');
                const collections = await db.listCollections().toArray();
                const collectionsNames = collections.map(collection => collection.name);

                response.json(collectionsNames);
                break;
        
            default:
                break;
        }
    } catch (error) {
        console.error(error.message);
    }    
}