// YourPage.js
import  { useState } from 'react';
import Assistant from './Assistant';

const Animation = () => {
  const [assistantState, setAssistantState] = useState({
    position: { x: 10, y: 10 },
    explanation: '',
    isVisible: false,
  });

  const showAssistantExplanation = (buttonNumber) => {
    const button = document.getElementById(`button-${buttonNumber}`);
    const buttonRect = button.getBoundingClientRect();
    setAssistantState({
      position: { x: buttonRect.left - 10, y: buttonRect.top + buttonRect.height + 10 },
      explanation: `This is Button ${buttonNumber}`,
      isVisible: true,
    });

    // Hide the assistant after a delay (adjust the delay as needed)
    setTimeout(hideAssistant, 5000);
  };

  const hideAssistant = () => {
    setAssistantState((prevState) => ({
      ...prevState,
      isVisible: false,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Your Buttons */}
      {[1, 2, 3].map((buttonNumber) => (
        <button
          key={buttonNumber}
          id={`button-${buttonNumber}`}
          className="mr-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={() => showAssistantExplanation(buttonNumber)}
        >
          Button {buttonNumber}
        </button>
      ))}

      {/* Assistant Component */}
      <Assistant {...assistantState} />

      {/* Event listener to hide assistant when clicking outside of it */}
      <div className="fixed inset-0" onClick={hideAssistant} />
    </div>
  );
};

export default Animation
