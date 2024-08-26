import { NextRequest, NextResponse } from "next/server"
import axios from "axios";

export const GET = async (req: NextRequest) => {
    try {
        const response = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?")
        if(response.status === 200) {
            return NextResponse.json(response.data);
        } else {
            return NextResponse.json({ message: "Erro ao buscar produtos" }, { status: response.status });
        }

    } catch (error) {
        return NextResponse.json({messsage: "Erro ao buscar produtos"}, {status:500});
    }
    
}

