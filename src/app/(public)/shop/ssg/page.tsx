import { ProductCard, type Product } from "@/components/ProductCard"
import { API_URL } from "@/constans"
import type { Metadata } from "next"


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Shop (SSG)",
    }
}

export default async function ShopSSGPage() {
    //SSG (Static Site Generation)
    const res = await fetch(API_URL)
    const products: Product[] = await res.json()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}