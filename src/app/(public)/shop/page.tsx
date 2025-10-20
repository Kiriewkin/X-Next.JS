import type { Metadata } from "next"
import { ProductCard, type Product } from "@/components/ProductCard"
import { API_URL } from "@/constans"

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Shop (SSR)",
    }
}
export default async function ShopSSRPage() {
    const res = await fetch(API_URL, {
        //SSR (Server-Side Rendering)
        cache: 'no-store'
    })
    const products: Product[] = await res.json()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}