import { ProductCard, type Product } from "@/components/ProductCard"
import { API_URL } from "@/constans"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Shop (ISR)",
    }
}

export default async function ShopISRPage() {
    //ISR (Incremental Static Regeneration)
    const res = await fetch(API_URL, {
        next: { revalidate: 300 }
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
