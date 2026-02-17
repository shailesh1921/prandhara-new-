"use client";

import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, Calendar as CalendarIcon, DollarSign, Video, FileText } from 'lucide-react';
import { useState } from 'react';

type Appointment = {
    id: string;
    patientName: string;
    patientImage: string;
    time: string;
    date: string;
    type: 'Video' | 'In-Person';
    status: 'Confirmed' | 'Pending' | 'Completed';
    notes: string;
};

export default function DashboardPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const appointments: Appointment[] = [
        {
            id: '1',
            patientName: 'Emma Wilson',
            patientImage: 'https://i.pravatar.cc/150?u=emma',
            time: '09:00 AM',
            date: 'Today',
            type: 'Video',
            status: 'Confirmed',
            notes: 'Initial consultation for digestive issues (Vata imbalance suspect).'
        },
        {
            id: '2',
            patientName: 'Michael Brown',
            patientImage: 'https://i.pravatar.cc/150?u=michael',
            time: '11:30 AM',
            date: 'Today',
            type: 'Video',
            status: 'Pending',
            notes: 'Follow-up on stress management plan.'
        },
        {
            id: '3',
            patientName: 'Sophie Chen',
            patientImage: 'https://i.pravatar.cc/150?u=sophie',
            time: '02:00 PM',
            date: 'Tomorrow',
            type: 'In-Person',
            status: 'Confirmed',
            notes: 'Yoga therapy session.'
        }
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-1 container py-10 px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-primary">Practitioner Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back, Dr. Sarah. You have 3 appointments today.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">Availability</Button>
                        <Button>New Patient</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,240</div>
                            <p className="text-xs text-muted-foreground">+4% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Upcoming Hours</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">24.5</div>
                            <p className="text-xs text-muted-foreground">Next 7 days</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Revenue (Monthly)</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$12,450</div>
                            <p className="text-xs text-muted-foreground">+12% from last month</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
                    <Card className="col-span-1">
                        <CardHeader>
                            <CardTitle>Upcoming Appointments</CardTitle>
                            <CardDescription>Manage your schedule and patient sessions.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Patient</TableHead>
                                        <TableHead>Time</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {appointments.map((appt) => (
                                        <TableRow key={appt.id}>
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarImage src={appt.patientImage} />
                                                        <AvatarFallback>{appt.patientName.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <span>{appt.patientName}</span>
                                                        <span className="text-xs text-muted-foreground truncate max-w-[150px]">{appt.notes}</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>{appt.time}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1">
                                                    {appt.type === 'Video' ? <Video className="h-3 w-3" /> : <Users className="h-3 w-3" />}
                                                    {appt.type}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant={appt.status === 'Confirmed' ? 'default' : (appt.status === 'Pending' ? 'secondary' : 'outline')}>
                                                    {appt.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <Video className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <FileText className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Calendar</CardTitle>
                            </CardHeader>
                            <CardContent className="flex justify-center">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-4 text-sm">
                                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                                        <FileText className="h-3 w-3 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Report Updated</p>
                                        <p className="text-muted-foreground">Emma Wilson's Dosha analysis was updated.</p>
                                        <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex items-start gap-4 text-sm">
                                    <div className="mt-1 bg-accent/20 p-2 rounded-full">
                                        <DollarSign className="h-3 w-3 text-accent-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-medium">New Booking</p>
                                        <p className="text-muted-foreground">Sarah J. booked a consultation.</p>
                                        <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
