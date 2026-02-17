"use client";

import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import { useCart } from "@/context/CartContext";
import { CartSheet } from "@/components/CartSheet";

type Product = {
    id: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    image: string;
    tags: string[];
};

const products: Product[] = [
    {
        id: '1',
        name: 'Ashwagandha Root Extract',
        category: 'Supplements',
        price: 24.99,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1611079830811-665e68371302?auto=format&fit=crop&q=80&w=400',
        tags: ['Stress', 'Energy']
    },
    {
        id: '2',
        name: 'Triphala Digestive Aid',
        category: 'Herbal Blend',
        price: 19.50,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=400',
        tags: ['Digestion', 'Detox']
    },
    {
        id: '3',
        name: 'Brahmi Focus Oil',
        category: 'Oils',
        price: 32.00,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400',
        tags: ['Memory', 'Calm']
    },
    {
        id: '4',
        name: 'Tumeric Curcumin Gold',
        category: 'Supplements',
        price: 28.00,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d04fcad?auto=format&fit=crop&q=80&w=400',
        tags: ['Inflammation', 'Joints']
    },
    {
        id: '5',
        name: 'Tulsi Holy Basil Tea',
        category: 'Teas',
        price: 12.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=400',
        tags: ['Immunity', 'Respiratory']
    },
    {
        id: '6',
        name: 'Chyawanprash Elixir',
        category: 'Immunity',
        price: 35.00,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=400',
        tags: ['Vitality', 'Anti-aging']
    }
];

export default function StorePage() {
    const { addItem } = useCart();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-1 container py-10 px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-serif font-bold text-primary">Natural Pharmacy</h1>
                        <p className="text-muted-foreground">Authentic ayurvedic medicines and organic supplements.</p>
                    </div>
                    <CartSheet />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Card key={product.id} className="overflow-hidden group h-full flex flex-col">
                            <div className="aspect-square relative overflow-hidden bg-secondary/5">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute top-2 right-2">
                                    <Badge variant="secondary" className="backdrop-blur-md bg-white/80">{product.category}</Badge>
                                </div>
                            </div>
                            <CardContent className="p-4 flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg line-clamp-1">{product.name}</h3>
                                    <div className="flex items-center text-sm font-medium">
                                        <Star className="w-3 h-3 text-accent fill-accent mr-1" />
                                        {product.rating}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {product.tags.map(tag => (
                                        <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">{tag}</span>
                                    ))}
                                </div>
                                <div className="text-xl font-bold text-primary mt-2">
                                    ${product.price.toFixed(2)}
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full" onClick={() => addItem(product)}>Add to Cart</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
