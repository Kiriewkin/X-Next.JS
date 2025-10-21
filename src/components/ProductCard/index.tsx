import Image from "next/image"

export interface Product {
    id: number
    title: string
    image: string
    price: number
}

export function ProductCard({ title, image, price }: Product) {
    return (
        <div className="max-w-sm bg-gray rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
            <div className="relative w-full h-48 flex justify-center items-center">
                <Image
                    src={image}
                    alt={title}
                    className="object-cover"
                    width={100}
                    height={100}
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-white-900 mb-2">{title}</h2>
                <p className="text-white-600 font-bold text-md">${price.toFixed(2)}</p>
            </div>
        </div>
    )
}