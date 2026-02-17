"use client";

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Clock, Video } from 'lucide-react';
import { format } from 'date-fns';

type Practitioner = {
    id: string;
    name: string;
    specialty: string;
    rating: number;
    image: string;
    price: number;
    bio: string;
    availability: string[];
};

const practitioners: Practitioner[] = [
    {
        id: '1',
        name: 'Dr. Dhiresh Singh',
        specialty: 'BNYS - Naturopathy & Yoga Expert',
        rating: 4.9,
        image: '/images/dr-dhiresh.jpg',
        bio: 'A dedicated BNYS practitioner with profound expertise in curating natural healing pathways. Dr. Dhiresh specializes in chronic disease reversal through therapeutic yoga, hydrotherapy, and diet, believing in the body\'s innate power to heal itself without invasiveness.',
        price: 50,
        availability: ['Mon', 'Wed', 'Fri']
    },
    {
        id: '2',
        name: 'Eng. Shailesh Singh',
        specialty: 'Nutrition & Fitness Strategist',
        rating: 4.8,
        image: '/images/eng-shailesh.jpg',
        bio: 'Applying an engineering mindset to human health, Shailesh is an expert in functional nutrition and systematic fitness training. He designs precision-based diet plans and workout regimes to optimize metabolic health and physical performance.',
        price: 45,
        availability: ['Tue', 'Thu', 'Sat']
    }
];

export default function ConsultPage() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | undefined>();
    const [selectedDoctor, setSelectedDoctor] = useState<Practitioner | null>(null);

    const timeSlots = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "04:00 PM"];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-1 container py-10 px-4 md:px-6">
                <div className="flex flex-col space-y-4 mb-8 text-center md:text-left">
                    <h1 className="text-3xl font-serif font-bold text-primary">Expert Consultation</h1>
                    <p className="text-muted-foreground max-w-2xl">
                        Book a private video session with certified naturopaths and ayurvedic doctors to guide your healing journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {practitioners.map((doctor) => (
                        <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border/50">
                            <CardHeader className="p-0">
                                <div className="h-32 bg-secondary/10 relative"></div>
                                <div className="px-6 -mt-12 flex justify-between items-end">
                                    <Avatar className="h-24 w-24 border-4 border-background shadow-sm">
                                        <AvatarImage src={doctor.image} />
                                        <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="mb-2 flex items-center bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm border">
                                        <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                                        <span className="font-bold text-sm">{doctor.rating}</span>
                                        <span className="text-xs text-muted-foreground ml-1">(0)</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4 px-6 space-y-3">
                                <div>
                                    <h3 className="font-bold text-lg">{doctor.name}</h3>
                                    <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">{doctor.bio}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> 45 mins
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Video className="w-4 h-4" /> Video Call
                                    </div>
                                </div>
                                <div className="pt-2 font-bold text-lg">
                                    ${doctor.price} <span className="text-sm font-normal text-muted-foreground">/ session</span>
                                </div>
                            </CardContent>
                            <CardFooter className="px-6 pb-6 pt-0">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="w-full" onClick={() => setSelectedDoctor(doctor)}>Book Appointment</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
                                        <DialogHeader>
                                            <DialogTitle>Book with {doctor.name}</DialogTitle>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4 md:grid-cols-2">
                                            <div className="space-y-4">
                                                <label className="text-sm font-medium">Select Date</label>
                                                <Calendar
                                                    mode="single"
                                                    selected={selectedDate}
                                                    onSelect={setSelectedDate}
                                                    className="rounded-md border mx-auto"
                                                    disabled={(date) => date < new Date()}
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Select Time</label>
                                                    <Select onValueChange={setSelectedTime}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Available slots" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {timeSlots.map(slot => (
                                                                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                                                    <h4 className="font-medium text-sm">Summary</h4>
                                                    <div className="flex justify-between text-sm">
                                                        <span>Consultation Fee</span>
                                                        <span>${doctor.price}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span>Service Fee</span>
                                                        <span>$5</span>
                                                    </div>
                                                    <div className="border-t pt-2 flex justify-between font-bold">
                                                        <span>Total</span>
                                                        <span>${doctor.price + 5}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button type="submit" className="w-full md:w-auto" disabled={!selectedDate || !selectedTime}>
                                                Confirm Booking
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
