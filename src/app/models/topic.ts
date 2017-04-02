interface Topic {
    menuName: string,
    fullName: string,
    icon: string,
    primaryColor: string,
    secondaryColor: string,
    pattern: string;
    scores: Array<{minPoints: string, text: string}>,
    questions: Array<{points: number, category: string, question: string, true: string, false: string}>
}