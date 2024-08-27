import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Product } from "../route";


interface QueryParams {
    brand?: string;
    product_type?: string;
    product_category?: string;
    product_tags?: string;
    price_greater_than?: number;
    price_less_than?: number;
    rating_greater_than?: number;
    rating_less_than?: number;
}

export const GET = async (req: NextRequest) => {
    const { searchParams } = req.nextUrl;

    const params: QueryParams = {};

    const brand = searchParams.get("brand");
    const productType = searchParams.get("product_type");
    const productCategory = searchParams.get("product_category");
    const productTags = searchParams.get("product_tags");
    const priceGreaterThan = searchParams.get("price_greater_than");
    const priceLessThan = searchParams.get("price_less_than");
    const ratingGreaterThan = searchParams.get("rating_greater_than");
    const ratingLessThan = searchParams.get("rating_less_than");

    if (brand) params.brand = brand;
    if (productType) params.product_type = productType;
    if (productCategory) params.product_category = productCategory;
    if (productTags) params.product_tags = productTags;
    if (priceGreaterThan) params.price_greater_than = Number(priceGreaterThan);
    if (priceLessThan) params.price_less_than = Number(priceLessThan);
    if (ratingGreaterThan) params.rating_greater_than = Number(ratingGreaterThan);
    if (ratingLessThan) params.rating_less_than = Number(ratingLessThan);

    try {
        const response = await axios.get<Product[]>('http://makeup-api.herokuapp.com/api/v1/products.json?', { params });
        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error); 
        return NextResponse.json({ message: "Erro ao buscar produtos" }, { status: 500 });
    }
};

