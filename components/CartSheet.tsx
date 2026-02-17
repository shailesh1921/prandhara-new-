"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CartSheet() {
    const { items, removeItem, updateQuantity, cartTotal, itemCount } = useCart();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Cart
                    {itemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {itemCount}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col w-full sm:max-w-md">
                <SheetHeader>
                    <SheetTitle>Your Wellness Cart ({itemCount})</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-4">
                            <ShoppingCart className="h-12 w-12 opacity-20" />
                            <p>Your cart is empty.</p>
                            <Button variant="link" asChild><Link href="/store">Browse Remedies</Link></Button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="h-20 w-20 relative rounded-md overflow-hidden bg-secondary/10 flex-shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                                        <p className="text-sm font-bold">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, -1)}>
                                                <Minus className="h-3 w-3" />
                                            </Button>
                                            <span className="text-sm w-4 text-center">{item.quantity}</span>
                                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, 1)}>
                                                <Plus className="h-3 w-3" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto text-destructive" onClick={() => removeItem(item.id)}>
                                                <Trash2 className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="space-y-4 pt-4">
                        <Separator />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <Button className="w-full" size="lg">Checkout</Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
