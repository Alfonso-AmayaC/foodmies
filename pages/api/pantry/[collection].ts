import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(request:NextApiRequest, response: NextApiResponse) {  
    const client = await clientPromise;
    const db = client.db('Pantry');
    const { collection } = request.query;
    let body, result;
    try {     
        switch (request.method.toUpperCase()) {
            case 'GET':
                let pantryItems;
                const projection = { _id: 0 };
                if(typeof collection === 'string')
                    pantryItems = await db.collection(collection).find({}).project(projection).toArray();
                response.json(pantryItems);
                break;
            case 'POST':
                body = request.body;
                
                if(typeof collection === 'string')
                    result = await db.collection(collection).insertOne(body);

                response.end(`Post operation was successful`);
                break;
            case 'PUT':
                body = request.body;
                const filter = { name: body.name }
                const newDocument = {
                    $set: {
                        ...body
                    }
                }
                console.log(newDocument);
                if(typeof collection === 'string')
                    result = await db.collection(collection).updateOne(filter, newDocument)

                console.log(result);
                response.end(JSON.stringify('Ready'))
        }
    } catch (error) {
        console.error(error.message);
        response.status(400).end(`Error: ${error.message.toString()}`)
    }  
}