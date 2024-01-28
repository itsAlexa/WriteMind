import TextAnimation from 'react-animate-text';

function Prompt() {
    const prompts = [
        "How was your day today?",
        "How do you feel?",
        "How did you achieve mindfulness today?",
        "What prompted you to take action today?",
        "What was the most surprising thing that happened today?",
        "Write about something you achieved today.",
        "Write about a challenge you overcame."
    ];
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];

    return (
        <div className="prompt-container">
            <TextAnimation>{randomPrompt}</TextAnimation>
        </div>
    )
  }
  
export default Prompt;