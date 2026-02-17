"use client";

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

type Message = {
    role: 'user' | 'assistant';
    content: string;
    remedies?: {
        name: string;
        type: 'Herb' | 'Yoga' | 'Lifestyle';
        description: string;
    }[];
};

export default function SymptomChecker() {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "Namaste. I am your Vital Flow health guide. Describe your symptoms or health concerns, and I will recommend natural Ayurvedic and Naturopathic remedies tailored for you."
        }
    ]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Simulate AI Delay
        setTimeout(() => {
            const response: Message = {
                role: 'assistant',
                content: "Based on your symptoms, it sounds like you may be experiencing an imbalance in Vata dosha, leading to digestive irregularity and mild anxiety. Here are some natural recommendations:",
                remedies: [
                    {
                        name: 'Triphala Tea',
                        type: 'Herb',
                        description: 'A gentle bowel tonic that aids digestion and supports regular elimination without dependency.'
                    },
                    {
                        name: 'Nadi Shodhana',
                        type: 'Yoga',
                        description: 'Alternate nostril breathing to calm the nervous system and balance energy flow.'
                    },
                    {
                        name: 'Warm Oil Massage',
                        type: 'Lifestyle',
                        description: 'Self-massage with warm sesame oil before a shower to ground the body and soothe dry skin.'
                    }
                ]
            };
            setMessages(prev => [...prev, response]);
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-1 container max-w-4xl py-10 px-4 md:px-6 flex flex-col">
                <div className="text-center mb-8 space-y-2">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
                        <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h1 className="text-3xl font-serif font-bold text-primary">AI Health Guardian</h1>
                    <p className="text-muted-foreground">
                        Intelligent symptom analysis merging ancient wisdom with modern technology.
                    </p>
                </div>

                <Card className="flex-1 flex flex-col shadow-lg border-border/50 bg-card/50 backdrop-blur-sm min-h-[500px]">
                    <CardContent className="flex-1 flex flex-col p-4 md:p-6">
                        <ScrollArea className="flex-1 pr-4">
                            <div className="space-y-6">
                                {messages.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                    >
                                        <Avatar className={`h-10 w-10 border ${msg.role === 'assistant' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                                            <AvatarFallback>
                                                {msg.role === 'assistant' ? <Bot className="w-5 h-5 text-primary" /> : <User className="w-5 h-5 text-secondary" />}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className={`space-y-2 max-w-[80%] ${msg.role === 'user' ? 'text-right' : ''}`}>
                                            <div className={`p-4 rounded-2xl inline-block text-left ${msg.role === 'assistant'
                                                    ? 'bg-muted/50 text-foreground rounded-tl-none'
                                                    : 'bg-primary text-primary-foreground rounded-tr-none'
                                                }`}>
                                                <p className="leading-relaxed">{msg.content}</p>
                                            </div>

                                            {msg.remedies && (
                                                <div className="grid gap-3 mt-4 text-left">
                                                    {msg.remedies.map((remedy, idx) => (
                                                        <div key={idx} className="p-3 rounded-xl border bg-card/80 hover:bg-card transition-colors">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                                                    {remedy.type}
                                                                </span>
                                                                <h4 className="font-bold">{remedy.name}</h4>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground">{remedy.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                                {isLoading && (
                                    <div className="flex gap-4">
                                        <Avatar className="h-10 w-10 border bg-primary/10">
                                            <AvatarFallback><Bot className="w-5 h-5 text-primary" /></AvatarFallback>
                                        </Avatar>
                                        <div className="p-4 rounded-2xl rounded-tl-none bg-muted/50 flex items-center">
                                            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>

                        <div className="mt-6 pt-4 border-t flex gap-2">
                            <Textarea
                                placeholder="e.g., I have a headache and feel tired..."
                                className="min-h-[50px] resize-none"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                            />
                            <Button
                                size="icon"
                                className="h-auto w-12 shrink-0 rounded-xl"
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                            >
                                <Send className="w-5 h-5" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
