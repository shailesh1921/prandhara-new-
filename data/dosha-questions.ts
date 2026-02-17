export type DoshaOption = {
    text: string;
    dosha: 'vata' | 'pitta' | 'kapha';
    value: number; // Weight of the answer
};

export type Question = {
    id: number;
    category: string;
    text: string;
    options: DoshaOption[];
};

export const doshaQuestions: Question[] = [
    {
        id: 1,
        category: 'Physical Structure',
        text: 'How would you describe your body frame?',
        options: [
            { text: 'Thin, lean, I don\'t gain weight easily', dosha: 'vata', value: 1 },
            { text: 'Medium build, good muscle tone', dosha: 'pitta', value: 1 },
            { text: 'Large, solid, I gain weight easily', dosha: 'kapha', value: 1 }
        ]
    },
    {
        id: 2,
        category: 'Skin',
        text: 'What is your skin type like?',
        options: [
            { text: 'Dry, rough, thin, cool to touch', dosha: 'vata', value: 1 },
            { text: 'Warm, reddish, sensitive, prone to acne', dosha: 'pitta', value: 1 },
            { text: 'Thick, oily, smooth, cool', dosha: 'kapha', value: 1 }
        ]
    },
    {
        id: 3,
        category: 'Hair',
        text: 'Describe your hair texture.',
        options: [
            { text: 'Dry, brittle, frizzy', dosha: 'vata', value: 1 },
            { text: 'Fine, straight, early graying or thinning', dosha: 'pitta', value: 1 },
            { text: 'Thick, lustrous, wavy or curly', dosha: 'kapha', value: 1 }
        ]
    },
    {
        id: 4,
        category: 'Metabolism',
        text: 'How is your appetite and digestion?',
        options: [
            { text: 'Irregular, I forget to eat sometimes, gas/bloating', dosha: 'vata', value: 1 },
            { text: 'Strong, I get "hangry" if I miss a meal, quick digestion', dosha: 'pitta', value: 1 },
            { text: 'Slow, steady, I can skip meals without issue', dosha: 'kapha', value: 1 }
        ]
    },
    {
        id: 5,
        category: 'Temperament',
        text: 'How do you react to stress?',
        options: [
            { text: 'Anxious, fearful, worried, overthinking', dosha: 'vata', value: 1 },
            { text: 'Irritable, angry, critical, impatient', dosha: 'pitta', value: 1 },
            { text: 'Calm, withdrawn, stubborn, possessive', dosha: 'kapha', value: 1 }
        ]
    },
    {
        id: 6,
        category: 'Sleep',
        text: 'How is your sleep pattern?',
        options: [
            { text: 'Light, interrupted, trouble falling asleep', dosha: 'vata', value: 1 },
            { text: 'Moderate, sound, but can wake up alert', dosha: 'pitta', value: 1 },
            { text: 'Deep, heavy, trouble waking up', dosha: 'kapha', value: 1 }
        ]
    },
    {
        id: 7,
        category: 'Temperature',
        text: 'How do you tolerate weather?',
        options: [
            { text: 'I dislike cold and dryness', dosha: 'vata', value: 1 },
            { text: 'I dislike heat and humidity', dosha: 'pitta', value: 1 },
            { text: 'I dislike damp and cool weather', dosha: 'kapha', value: 1 }
        ]
    }
];
