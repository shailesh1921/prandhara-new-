"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { doshaQuestions, type DoshaOption } from '@/data/dosha-questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/Navbar';
import { ArrowRight, Check, RotateCcw } from 'lucide-react';

export default function AssessmentPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState({ vata: 0, pitta: 0, kapha: 0 });
    const [isCompleted, setIsCompleted] = useState(false);

    const currentQuestion = doshaQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / doshaQuestions.length) * 100;

    const handleSelect = (option: DoshaOption) => {
        setScores(prev => ({
            ...prev,
            [option.dosha]: prev[option.dosha] + option.value
        }));

        if (currentQuestionIndex < doshaQuestions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
            }, 300);
        } else {
            setIsCompleted(true);
        }
    };

    const getDominantDosha = () => {
        const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
        return sorted[0][0]; // 'vata', 'pitta', or 'kapha'
    };

    const resetQuiz = () => {
        setScores({ vata: 0, pitta: 0, kapha: 0 });
        setCurrentQuestionIndex(0);
        setIsCompleted(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-1 flex flex-col items-center justify-center p-4">
                {!isCompleted ? (
                    <div className="w-full max-w-2xl space-y-8">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-serif font-bold text-primary">Discover Your Dosha</h1>
                            <p className="text-muted-foreground">Answer honestly to reveal your unique constitution.</p>
                        </div>

                        <Progress value={progress} className="h-2" />

                        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-10">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentQuestion.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{currentQuestion.category}</span>
                                            <h2 className="text-2xl font-medium">{currentQuestion.text}</h2>
                                        </div>

                                        <div className="grid gap-4">
                                            {currentQuestion.options.map((option, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleSelect(option)}
                                                    className="flex items-center justify-start p-4 rounded-xl border-2 border-transparent bg-secondary/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
                                                >
                                                    <div className="h-6 w-6 rounded-full border-2 border-primary/30 mr-4 flex items-center justify-center group-hover:border-primary">
                                                        <div className="h-3 w-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <span className="text-lg">{option.text}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </CardContent>
                        </Card>

                        <div className="text-center text-sm text-muted-foreground">
                            Question {currentQuestionIndex + 1} of {doshaQuestions.length}
                        </div>
                    </div>
                ) : (
                    <ResultsView scores={scores} dominant={getDominantDosha()} onReset={resetQuiz} />
                )}
            </main>
        </div>
    );
}

function ResultsView({ scores, dominant, onReset }: { scores: any, dominant: string, onReset: () => void }) {
    const descriptions: any = {
        vata: "You are Vata dominant. Your nature is like the wind—creative, energetic, and changeable. Balance comes through warmth, routine, and grounding foods.",
        pitta: "You are Pitta dominant. Your nature is like fire—sharp, intelligent, and transformative. Balance comes through cooling activities, relaxation, and sweet/bitter foods.",
        kapha: "You are Kapha dominant. Your nature is like the earth—calm, strong, and steady. Balance comes through stimulation, exercise, and light, warm foods."
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl text-center space-y-8"
        >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 mb-4">
                <Leaf className="w-12 h-12 text-primary" />
            </div>

            <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold capitalize text-foreground">
                    {dominant} Constitution
                </h2>
                <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
                    {descriptions[dominant]}
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto py-8">
                <div className="p-4 bg-muted rounded-xl">
                    <div className="text-2xl font-bold text-primary">{Math.round(scores.vata)}</div>
                    <div className="text-sm text-muted-foreground">Vata</div>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                    <div className="text-2xl font-bold text-destructive">{Math.round(scores.pitta)}</div>
                    <div className="text-sm text-muted-foreground">Pitta</div>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                    <div className="text-2xl font-bold text-secondary">{Math.round(scores.kapha)}</div>
                    <div className="text-sm text-muted-foreground">Kapha</div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground min-w-[200px]">
                    Get My Healing Plan <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={onReset}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Retake Quiz
                </Button>
            </div>
        </motion.div>
    );
}

function Leaf(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}
