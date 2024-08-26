import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    brand: string;
    product_type: string;
    product_category: string;
    product_tags: string;
    rating: number;
}

export const GET = async (req: NextRequest) => {
    const { searchParams } = req.nextUrl;

    const brand = searchParams.get("brand");
    const productType = searchParams.get("product_type");
    const productCategory = searchParams.get("product_category");
    const productTags = searchParams.get("product_tags");
    const priceGreaterThan = searchParams.get("price_greater_than");
    const priceLessThan = searchParams.get("price_less_than");
    const ratingGreaterThan = searchParams.get("rating_greater_than");
    const ratingLessThan = searchParams.get("rating_less_than");

    const params: any = {};

    if (brand) params.brand = brand;
    if (productType) params.product_type = productType;
    if (productCategory) params.product_category = productCategory;
    if (productTags) params.product_tags = productTags;
    if (priceGreaterThan) params.price_greater_than = priceGreaterThan;
    if (priceLessThan) params.price_less_than = priceLessThan;
    if (ratingGreaterThan) params.rating_greater_than = ratingGreaterThan;
    if (ratingLessThan) params.rating_less_than = ratingLessThan;

    try {
        const response = await axios.get<Product[]>('http://makeup-api.herokuapp.com/api/v1/products.json', { params });
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json({ message: "Erro ao buscar produtos" }, { status: 500 });
    }
};
