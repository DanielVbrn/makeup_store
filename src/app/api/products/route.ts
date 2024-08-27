// src/app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    brand: string;
    product_type: string;
    product_category: string;
    product_tags: string;
    rating: number;
}



export const GET = async (req: NextRequest) => {
    try {
        const response = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?");
        if (response.status === 200) {
            return NextResponse.json(response.data);
        } else {
            return NextResponse.json({ message: "Erro ao buscar produtos" }, { status: response.status });
        }
    } catch (error) {
        return NextResponse.json({ message: "Erro ao buscar produtos" }, { status: 500 });
    }
};



export const POST = async (req: NextRequest) => {
    try {
        if (req.method !== 'POST') {
            return NextResponse.json({ message: "Método não permitido" }, { status: 405 });
        }

        const product: Product = await req.json();

        if (!product.name || !product.price || !product.brand) {
            return NextResponse.json({ message: "Dados do produto inválidos" }, { status: 400 });
        }

       const response = await axios.post('http://makeup-api.herokuapp.com/api/v1/products.json', product);

        return NextResponse.json(response.data, { status: 201 });
    } catch (error) {
        console.error('Erro ao adicionar produto:', error); // Log do erro para depuração
        return NextResponse.json({ message: "Erro ao adicionar produto" }, { status: 500 });
    }
};