import TextAnimation from 'react-animate-text';

function Prompt() {
    const prompts = [
        "How was your day today?",
        "What prompted you to take action today?",
        "Write about something you achieved today.",
        "How do you feel?"
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